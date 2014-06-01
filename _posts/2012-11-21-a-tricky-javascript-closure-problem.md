---
layout: post
title: A tricky JavaScript closure problem
tags: programming
---

Say you have ten images on a page, with IDs `img0` to `img9`. You'd like the number of the image to pop up when you click on one. You might be tempted to write the following JQuery code:

~~~ javascript
for(var i=0; i<10; i++) {
    $("#img" + i).click(
        function () { alert(i); }
    );
}
~~~

The event handlers will successfully bind to every image's onClick event. You may be surprised, however, to find that when you click on any of the images, 10 always pops up! You can try it for yourself at [this jsfiddle](http://jsfiddle.net/AwDDy/).

The problem, of course, is that a *reference* to the `i` object is being stored in the click handler closure, rather than the actual value of `i`. Since there's only one counter object, every single click handler will refer to the same object, which has the value 10 by the time the user gets a chance to trigger the handler.

Here's [a workaround](http://jsfiddle.net/v4sSD/):

~~~ javascript
for(var i=0; i<10; i++) {
    (function (i) {
        $("#img" + i).click(
            function () { alert(i); }
        );
    })(i);
}
~~~

So what happened? Lest you think that the extra execution context has something to do with it, observe that this version without a function argument [doesn't work](http://jsfiddle.net/vfwnU/):

~~~ javascript
for(var i=0; i<10; i++) {
    (function () {
        $("#img" + i).click(
            function () { alert(i); }
        );
    })();
}
~~~

This demonstrates that the function argument preserves the passed value. Indeed, primitives are copied by value in function calls:

~~~ javascript
function toFive(in) {
	in = 5;
}
var a = 4;
toFive(a);
a == 4 // true
~~~

What about the case where we're dealing with real objects? Here's an alternative example, which toggles each image to a different image on click. This version [doesn't work](http://jsfiddle.net/Zpwku/) (the last image is always toggled):

~~~ javascript
for(var i=0; i<5; i++) {
    var toggler = $("<img/>", { "src": "http://www.famfamfam.com/lab/icons/silk/icons/cross.png" });
    toggler.click(function () { toggler.attr("src", "http://www.famfamfam.com/lab/icons/silk/icons/tick.png"); });
    $("#container").append(toggler);
}
~~~

First of all, it's important to note that variable and function declarations are [hoisted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting) to the top of their scope, so the above code is equivalent to:

~~~ javascript
var toggler;
for(var i=0; i<5; i++) {
    toggler = $("<img/>", { "src": "http://www.famfamfam.com/lab/icons/silk/icons/cross.png" });
    toggler.click(function () { toggler.attr("src", "http://www.famfamfam.com/lab/icons/silk/icons/tick.png"); });
    $("#container").append(toggler);
}
~~~

When you assign a new `<img>` to `toggler`, the reference is updated to point to the new object. And it's the *reference*, not the value, which is bound into the `click` closure. So the same reference is being updated over and over, and the same reference is being bound into the click `closure` each time. If we want to fix this problem, we can create a new reference each time [by using](http://jsfiddle.net/YLSn6/) a self-executing function declaration like before:

~~~ javascript
for(var i=0; i<5; i++) {
    var toggler = $("<img/>", { "src": "http://www.famfamfam.com/lab/icons/silk/icons/cross.png" });
    (function (t) {
        t.click(function () { t.attr("src", "http://www.famfamfam.com/lab/icons/silk/icons/tick.png"); });
        $("#container").append(t);
    })(toggler);
}
~~~