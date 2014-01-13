---
layout: post
title: Optimizations performed by javac
tags: programming
---

I've been a full-time Java developer for about a year now, and in that time I've seen a lot of incorrect information out there about the behavior of the Java compiler (javac). With this post I hope to clear up some misconceptions about compile-time optimization in Java. Note that this information is correct for my version of javac but is not necessarily true for all JDKs.

    brian@mint ~ $ java -version
    java version "1.7.0_45"
    Java(TM) SE Runtime Environment (build 1.7.0_45-b18)
    Java HotSpot(TM) 64-Bit Server VM (build 24.45-b08, mixed mode)

### Boolean expressions

Let's start with an easy case. Is the compiler smart enough to spot a redundant logical NOT in a boolean condition? Let's compile the following blocks of code:

{% highlight java %}
        if(!booleanExpression) {
            doSomething(1);
        } else {
            doSomething(0);
        }
{% endhighlight %}

{% highlight java %}
        if(booleanExpression) {
            doSomething(0);
        } else {
            doSomething(1);
        }
{% endhighlight %}

The compiler produces pretty much identical bytecode for both of these. Of course, the cost of an added logical NOT operation would be insignificantly small. But in fact there is no extra operation. Let's examine the bytecode:

```13: ifne          23
16: iconst_1      
17: invokestatic  #5                  // doSomething(1)
20: goto          27
23: iconst_0      
24: invokestatic  #5                  // doSomething(0)
27: return```


```13: ifeq          23
16: iconst_0      
17: invokestatic  #5                  // doSomething(0)
20: goto          27
23: iconst_1      
24: invokestatic  #5                  // doSomething(1)
27: return```

The only difference is an `ifeq` instead of an `ifne` as the condition for the jump, so you can feel free to use either of the two forms depending on which makes more intuitive sense in context.

Now for a more complex case. You might be tempted to apply your knowledge of boolean algebra to transform the former of these blocks into the latter in order to improve performance in a tight loop:

{% highlight java %}
    if(!a || !b) {
        doSomething();
    }
{% endhighlight %}

{% highlight java %}
    if(!(a && b)) {
        doSomething();
    }
{% endhighlight %}

Would you be justified in doing so?

```19: iload_2       
20: ifeq          27
23: iload_3       
24: ifne          33
30: invokevirtual #6```

```19: iload_2       
20: ifeq          27
23: iload_3       
24: ifne          33
30: invokevirtual #6```

Nope! Once again, the compiler is smarter than you are. In fact, in this case the compiler literally generates the exact same bytecode for the two functions.

### Constant arithmetic

{% highlight java %}
    private static int SECONDS_IN_30_DAYS = 60*60*24*30;
{% endhighlight %}

This is clearly more readable than embedding the magic constant 2592000 in the source code. But does it incur a runtime performance cost? Here is the bytecode for the class's static initializer:

```0: ldc           #5                  // int 2592000
2: putstatic     #3                  // Field SECONDS_IN_30_DAYS:I
5: return```

The `ldc` instruction indicates that the compiler has precomputed the value 2592000 and stored it in the class's constant pool. No multiplication occurs at run-time.

OK, so that works for integer arithmetic. How about constant boolean expressions?

{% highlight java %}
    private static boolean troo = true && (false || false || (true && true));
{% endhighlight %}

```0: iconst_1      
1: putstatic     #3                  // Field troo:Z
4: return```

This one is even leaner! Since there's a special bytecode instruction for loading the integer 1, you don't even have to go to the constant pool.

Note that in the two previous examples we have forced the compiler to create a static field within the class, and to create code which initializes the field. Creating a field is unnecessary for constant expressions. If we add the `final` keyword, we can get the compiler to inline these values wherever they're actually used within the class.

Without `final`:

{% highlight java %}
    private static int SECONDS_IN_30_DAYS = 60*60*24*30;

    public static void main(String[] args) {
        System.out.println(SECONDS_IN_30_DAYS);
    }
{% endhighlight %}

```public static void main(java.lang.String[]);
  Code:
     0: getstatic     #2                  // Field java/lang/System.out:Ljava/io/PrintStream;
     3: getstatic     #3                  // Field SECONDS_IN_30_DAYS:I
     6: invokevirtual #4                  // Method java/io/PrintStream.println:(I)V
     9: return        

static {};
  Code:
     0: ldc           #5                  // int 2592000
     2: putstatic     #3                  // Field SECONDS_IN_30_DAYS:I
     5: return```

With `final` there is no separate static initializer section, and instead of `getstatic` we can simply `ldc` to get the constant value:

{% highlight java %}
    private static final int SECONDS_IN_30_DAYS = 60*60*24*30;

    public static void main(String[] args) {
        System.out.println(SECONDS_IN_30_DAYS);
    }
{% endhighlight %}

```public static void main(java.lang.String[]);
  Code:
     0: getstatic     #2                  // Field java/lang/System.out:Ljava/io/PrintStream;
     3: ldc           #3                  // int 2592000
     5: invokevirtual #4                  // Method java/io/PrintStream.println:(I)V
     8: return```

### String concatenation

Some people will tell you that String concatenation with `+` is a performance killer on Java. They'll tell you to use StringBuilder instead. But javac is actually pretty smart about converting `+` into StringBuilder appends.

{% highlight java %}
    return str1 + " : " + str2;
{% endhighlight %}

```11: new           #3                  // class java/lang/StringBuilder
14: dup           
15: invokespecial #4                  // Method java/lang/StringBuilder."<init>":()V
18: aload_1       
19: invokevirtual #5                  // Method java/lang/StringBuilder.append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
22: ldc           #6                  // String  : 
24: invokevirtual #5                  // Method java/lang/StringBuilder.append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
27: aload_2       
28: invokevirtual #5                  // Method java/lang/StringBuilder.append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
31: invokevirtual #7                  // Method java/lang/StringBuilder.toString:()Ljava/lang/String;```

However, it's not perfect. In cases like this you need to construct a StringBuilder yourself, because the automatic StringBuilder won't be reused for the second line:

{% highlight java %}
    String cat = str1 + " : " + str2;
    return cat + " 123";
{% endhighlight %}

``` 8: new           #2                  // class java/lang/StringBuilder
11: dup           
12: invokespecial #3                  // Method java/lang/StringBuilder."<init>":()V
15: aload_1       
16: invokevirtual #4                  // Method java/lang/StringBuilder.append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
19: ldc           #5                  // String  : 
21: invokevirtual #4                  // Method java/lang/StringBuilder.append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
24: aload_2       
25: invokevirtual #4                  // Method java/lang/StringBuilder.append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
28: invokevirtual #6                  // Method java/lang/StringBuilder.toString:()Ljava/lang/String;
31: astore_3      
35: new           #2                  // class java/lang/StringBuilder
38: dup           
39: invokespecial #3                  // Method java/lang/StringBuilder."<init>":()V
42: aload_3       
43: invokevirtual #4                  // Method java/lang/StringBuilder.append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
46: ldc           #8                  // String  123
48: invokevirtual #4                  // Method java/lang/StringBuilder.append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
51: invokevirtual #6                  // Method java/lang/StringBuilder.toString:()Ljava/lang/String;```

Note that the StringBuilder constructor is called twice (lines 8 and 35).

### Constant String concatenation

[IntelliJ IDEA](http://www.jetbrains.com/idea/) breaks lengthy String constants into multiple lines:

{% highlight java %}
return "We the People of the United States, in Order to form a more perfect "
     + "Union, establish Justice, insure domestic Tranquility, provide for the "
     + "common defence, promote the general Welfare, and secure the Blessings "
     + "of Liberty to ourselves and our Posterity, do ordain and establish this "
     + "Constitution for the United States of America.";
{% endhighlight %}

As you might expect, the compiler deals:

```0: ldc           #2                  // String We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.```

### Dead code elimination

If code is unreachable, it will be eliminated from the class file:

{% highlight java %}
public static void main(String[] args) {
    if(false) {
        System.out.println("The universe is broken.");
    }
}
{% endhighlight %}

```public static void main(java.lang.String[]);
  Code:
     0: return```

### Advanced optimizations

Believe it or not, that's about all of the optimizations that are performed at compile time. The really advanced optimizations are going to be deferred until the code is JIT compiled at runtime. This allows the JIT to write machine code which is optimized for your specific processor architecture.

Something you **need** to be aware of, though, is that to employ certain optimizations the JIT cannot compile loaded bytecode immediately:

> A warm-up period provides the HotSpot VM’s JIT compiler the opportunity to collect information about a running program and make intelligent dynamic optimization decisions based on the hot” code paths taken by the executing program. By default, the HotSpot Server VM executes a block of Java byte code 10,000 times before the HotSpot Server JIT compiler produces native machine code for that block of Java bytecode.

- [Java Performance](http://www.amazon.com/Java-Performance-Charlie-Hunt/dp/0137142528), by Charlie Hunt and Binu John.

