---
layout: post
title: Covariance and contravariance rules in Java
tags: programming
---

Assignment
----------

Assignment in Java is **covariant**. That means that if `SubClazz` is a subtype of `Clazz` then a `SubClazz` reference can be assigned to a `Clazz` variable.

~~~ java
public class Clazz { }
public class SubClazz extends Clazz { }
~~~

~~~ java
Clazz instance = new SubClazz();
~~~

Assignment will also occur implicitly when returning from a method or when passing arguments.

~~~ java
public Clazz makeClazz() {
    return new SubClazz(); // OK
}

public Clazz takeClazz(Clazz foo) { }
~~~

~~~ java
takeClazz(new SubClazz()); // OK
~~~

The same rule is used for determining whether a cast is valid.

~~~ java
(Clazz)new SubClazz(); // OK
(SubClazz)new Clazz(); // Error
~~~

Arrays
------

Arrays in Java are **covariant** in the type of the objects they hold. In other words, `Clazz[]` can hold `SubClazz` objects.

~~~ java
Clazz[] array = new Clazz[10];
array[0] = new SubClazz();
~~~

They are also **covariant** in the type of the array itself. You can directly assign a `SubClazz[]` type to a `Clazz[]` type without a cast.

~~~ java
Clazz[] array = new SubClazz[10];
~~~

This is dangerous. Although the type of the `array` variable is `Clazz[]`, the actual array object on the heap is a `SubClazz[]`. For that reason, the following code compiles fine but throws a `java.lang.ArrayStoreException` at runtime:

~~~ java
Clazz[] array = new SubClazz[10];
array[0] = new Clazz();
~~~

Overriding methods
------------------

The overriding method is **covariant** in the return type and **invariant** in the argument types. That means that the return type of the overriding method can be a subclass of the return type of the overridden method, but the argument types must match exactly.

~~~ java
public interface Parent {
    public Clazz act(Clazz parameter);
}

public interface Child extends Parent {
    @Override
    public SubClazz act(Clazz parameter);
}
~~~

Generics
--------

