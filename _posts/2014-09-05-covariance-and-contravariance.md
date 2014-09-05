---
layout: post
title: Covariance and contravariance rules in Java
tags: programming
---

This post serves as a reference for what type variance is allowed by the [Java Language Specification](http://docs.oracle.com/javase/specs/jls/se8/html/index.html).

Assignment
----------

Assignment in Java is **covariant**. That means that if SubClazz is a subtype of Clazz then a Clazz type can be assigned a SubClazz type.

~~~ java
class Clazz {}
class SubClazz extends Clazz {}
~~~

~~~ java
Clazz instance = new SubClazz();
~~~

Arrays
------

Arrays in Java are **covariant** in the type of the objects they hold. That is, if SubClazz is a subtype of Clazz, then Clazz[] can hold SubClazz objects.

~~~ java
Clazz[] array = new Clazz[10];
array[0] = new SubClazz();
~~~

They are also **covariant** in the type of the array itself. You can directly assign a SubClazz[] reference to a Clazz[] variable without a cast.

~~~ java
Clazz[] array = new SubClazz[10];
~~~

Overriding methods
------------------

The overriding method is **covariant** in the return type and **invariant** in the parameter types. That means that the return type of the overriding method can be a subclass of the return type of the overridden method, but the parameter types must match exactly.

~~~ java
private interface Parent {
    public Clazz act(Clazz parameter);
}

private interface Child extends Parent {
    @Override
    public SubClazz act(Clazz parameter);
}
~~~
