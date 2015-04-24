---
layout: post
title: Covariance and contravariance rules in Java
tags: programming
---

This post is a go-to quick reference for exactly how covariance and contravariance work in Java. Different programming languages do this in different ways, so sometimes it can be tricky to switch between languages and keep the rules straight. When you switch over to Java, use this guide to refresh your memory.

Type conversion
---------------

Type conversion in Java is **covariant**. That means that if `SubClazz` is a subtype of `Clazz` then a `SubClazz` reference can be cast to a `Clazz`. The other way doesn't work- obviously, right? [Don't tell that to the designers of Dart.](https://www.dartlang.org/articles/why-dart-types/#optimism-on-down-assignments)

~~~ java
public class Clazz { }
public class SubClazz extends Clazz { }
~~~

~~~ java
(Clazz)new SubClazz(); // OK
(SubClazz)new Clazz(); // Error
~~~

Conversion can occur implictly during assignment:

~~~ java
Clazz instance = new SubClazz();
~~~

Conversion can also occur implicitly when returning from a method or when passing arguments.

~~~ java
public Clazz makeClazz() {
    return new SubClazz();
}

public Clazz takeClazz(Clazz foo) { }
~~~

~~~ java
takeClazz(new SubClazz());
~~~

Arrays
------

Arrays in Java are **covariant** in the type of the objects they hold. In other words, `Clazz[]` can hold `SubClazz` objects.

~~~ java
Clazz[] array = new Clazz[10];
array[0] = new SubClazz();
~~~

They are also **covariant** in the type of the array itself. You can directly assign a `SubClazz[]` type to a `Clazz[]`.

~~~ java
Clazz[] array = new SubClazz[10];
~~~

Be careful though; the above line is dangerous. Although the type of the `array` variable is `Clazz[]`, the actual array object on the heap is a `SubClazz[]`. For that reason, the following code compiles fine but throws a `java.lang.ArrayStoreException` at runtime:

~~~ java
Clazz[] array = new SubClazz[10];
array[0] = new Clazz();
~~~

Overriding methods
------------------

The overriding method is **covariant** in the return type and **invariant** in the argument types. That means that the return type of the overriding method can be a subclass of the return type of the overridden method, but the argument types must match exactly.

~~~ java
public interface Parent {
    public Clazz act(Clazz argument);
}

public interface Child extends Parent {
    @Override
    public SubClazz act(Clazz argument);
}
~~~

If the argument types aren't identical in the subclass then the method will be *overloaded* instead of overridden. You should always use the `@Override` annotation to ensure that this doesn't happen accidentally.

Generics
--------

Unless bounds are involved, generic types are **invariant** with respect to the parameterized type. So you can't do covariant ArrayLists like this:

~~~ java
ArrayList<Clazz> ary = new ArrayList<SubClazz>(); // Error!
~~~

The normal rules apply to the type being parameterized:

~~~ java
List<Clazz> list = new ArrayList<Clazz>();
~~~

Unbounded wildcards allow assignment with any type parameter: 

~~~ java
List<?> list = new ArrayList<Clazz>();
~~~

Bounded wildcards affect assignment like you might expect:

~~~ java
List<? extends Clazz> list = new ArrayList<SubClazz>();
List<? super Clazz> list2 = new ArrayList<Object>();
~~~

Java is smart enough that *more* restrictive type bounds are commensurable with *less* restrictive type bounds when appropriate:

~~~ java
List<? super Clazz> clazzList;
List<? super SubClazz> subClazzList;
~~~

~~~ java
subClazzList = clazzList;
~~~

Single type parameters work the same way, although [they must be upper-bounded](http://www.angelikalanger.com/GenericsFAQ/FAQSections/TypeParameters.html#FAQ107). If you have multiple type parameters, they are similarly intuitive:

~~~ java
public class GenericsTest<T extends GenericsTest.A & GenericsTest.B> {
    T member;
    
    interface A {}
    interface B {}
    interface C extends A, B {}
}

A member1 = new GenericsTest<C>().member;
B member2 = new GenericsTest<C>().member;
C member3 = new GenericsTest<C>().member;
~~~

You can add or remove the type parameters from the return type of an overriding method and it will still compile:

~~~ java
public interface Parent {
    public List echo();
}

public interface Child extends Parent {
    @Override
    public List<String> echo();
}
~~~

~~~ java
public interface Parent {
    public List<String> echo();
}

public interface Child extends Parent {
    @Override
    public List echo();
}
~~~

Wildcards can be present in the types of method arguments. If you want to override a method with a wildcard-typed argument, the overriding method must have an identical type parameter. You cannot be "more specific" with the overriding method:

~~~ java
public interface Parent {
    public void act(List<? extends List> a);
}

public interface Child extends Parent {
    @Override
    public void act(List<? extends ArrayList> a); // Error!
}
~~~

Also, you can replace any type-parameterized method argument with a non-type-parameterized method argument in the subclass and it will still be considered an override:

~~~ java
public interface Parent {
    public void act(List<? extends Number> a);
}

public interface Child extends Parent {
    @Override
    public void act(List a);
}
~~~