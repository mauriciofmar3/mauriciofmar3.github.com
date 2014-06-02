---
layout: post
title: Square roots and fixed points
tags: programming math
---

There's [an old comment](https://news.ycombinator.com/item?id=571090) on HN that annoys me. In it, a developer whines eloquently and bitterly about his experience being stumped by a common interview question: "write an algorithm for computing the square root of a number." 

> I tried a couple more times to answer this question that is completely unrelated to the job I'm interviewing for. Finally, I get so fed up with this moron that my internal ticker clicks over and I realize, "Even if I get this job, I'm going to be dealing with these kinds of nazel-gazing engineers every single day. Not an environment I want to be in."

"Completely unrelated?" The problem is easily solved with binary search; is it inconceivable that a frontend developer would ever use binary search? For that matter, is this interview for a contract to build a single front-end, or for a full-time developer position which may continue indefinitely? Because if it's the latter, general problem solving questions are completely fair game. The company is going to need to make an investment of institutional knowledge in a new developer. If he or she can pivot to a new role as needed then the company may be able to avoid hiring someone new in the future, avoiding the need to bring another employee up to speed. There is legitimate value added by being able to solve problems outside of your expertise.

Anyway, other than the obvious solution of binary search, how might we solve the problem of calculating $$\sqrt{a}$$? Let's first introduce the concept of a **fixed point**. A fixed point is a value which is unchanged by the function - that is, $$f(p) = p$$. For example, a fixed point of the sine function is 0 because $$\sin(0)=0$$. A fixed point of the cosine function is located around 0.739085133 because $$\cos(0.739085133)\approx0.739085133$$. In fact, if we plot the cosine function on top of $$f(p) = p$$ then we can see that they intersect at exactly that point:

![Plot 1](/images/plot-0.svg)

One interesting fact which might be of use is that $$\sqrt{a}$$ is a fixed point of the function $$f(x)=\frac{a}{x}$$. We can therefore graph $$f(x)=\frac{a}{x}$$ to find its fixed point $$\sqrt{a}$$. Here's a plot for various values of a:

![Plot 2](/images/plot-1.svg)

By subtracting x from the function it becomes a root finding problem:

![Plot 3](/images/plot-2.svg)

This we can solve with Newton's method:

$$ x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} $$

$$ x_{n+1} = x_n - \frac{\frac{a}{x_n}-x_n}{-\frac{a}{x^{2}}-1} $$

$$ x_{n+1} = \frac{2x_n}{1+\frac{a}{x_n{}^2}} $$

Of course, we could have just used Newton's method from the beginning. If we're trying to calculate $$\sqrt{a}$$ then the value we're looking for is a zero of the function $$f(x)=x^{2}-a$$. In this case we have:

$$ x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} $$

$$ x_{n+1} = x_n - \frac{x_n{}^2-a}{2x_n} $$

$$ x_{n+1} = \frac{x_n{}^2+a}{2x_n} $$

These are different functions but they have the same fixed point. This is a plot of $$ x_{n+1} - x_n $$ for the two different functions (with a=7) showing that they have the same zeros:

![Plot 4](/images/plot-3.svg)

Newton's method corresponds closely to a concept called **fixed point iteration**. In fixed point iteration, we repeatedly evaluate a function and feed its output back into its input. Eventually we hope it will converge on a fixed point. We mentioned the cosine function earlier; this is one such function which always converges on a particular fixed point. Enter any value into a scientific calculator and repeatedly press the cosine button:

<p style="text-align:center">-1.0000, 0.5403, 0.8575, 0.6542, 0.7934, 0.7013, 0.7639, 0.7221, 0.7504, 0.7314, 0.7442, 0.7356</p>

It will eventually converge to a value near 0.7391:

![Plot 5](https://upload.wikimedia.org/wikipedia/commons/e/ea/Cosine_fixed_point.svg)

Another function which converges to a fixed point is the expression given by Newton's method applied to the function $$f(x)=x^2-a$$, which we derived before:

$$ x_{n+1} = \frac{x_n{}^2+a}{2x_n} $$

If we rearrange the right side we obtain:

$$ x_{n+1} = \frac{1}{2}(x_n+\frac{a}{x_n}) $$

This is called [the Babylonian method, or Heron's method](https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method), and it was actually discovered long before Newton's method. The idea was that if $$x_n$$ is an overestimate to $$\sqrt{a}$$ then $$\frac{a}{x_n}$$ is an underestimate, and you can average them to get a pretty good approximation. Repeated iteration improves this approximation until it converges on $$\sqrt{x}$$, which we know is a fixed point.

Remember that before we said $$\sqrt{a}$$ is a fixed point of the function $$f(x)=\frac{a}{x_n}$$. Unfortunately if you iterate that function, you will not approach $$\sqrt{a}$$. Fixed point iteration doesn't always work and this is one such case. The math behind being able to tell whether an arbitrary function will converge to a fixed point under fixed point iteration is [complicated](https://en.wikipedia.org/wiki/Fixed-point_theorem). 

Now it would be very simple to wrap the Babylonian method in a loop and perform a couple steps of fixed point iteration to get a decent sqrt(a). But since we're finding a fixed point, this seems like a nice time to break out something called a *fixed point combinator*. The best-known fixed point combinator is the *y combinator*. You've probably heard of it due to the eponymous startup incubator founded by Lisp greybeard Paul Graham.

![YCombinator logo](http://ycombinator.com/images/yc500.gif)

This is the definition of the y combinator:

$$ \lambda f.(\lambda x.f (x x)) (\lambda x.f (x x)) $$

The reason y is called a fixed-point combinator is because of what happens when you apply it to a function and reduce:

lambda derivation

So the y combinator satisfies the equation y f = f (y f), and this matches the form $$something = f (something)$$ - does that look familiar? It's the definition of a fixed point. So, $$y f$$ is a fixed point of f! Therefore all we have to do is apply the y combinator to obtain a fixed point of f. 

Well, not really. All the y combinator is doing is facilitating fixed-point iteration:

y f = f (y f)
    = f (f (y f))
    = f (f (f (y f)))
    = f (f (f (f (y f))))
    ...

And, as we know from the f(x) = a/x example, fixed point iteration doesn't actually always converge on a fixed point.

By the way, it appears that this expansion will continue forever and never terminate. But that's because in step # of the derivation we assumed that we will always call the provided function. We need not always call it; instead we could check for a termination condition and return a value instead. 

Let's bring this back to the sqrt example. Our f would look like this:

    function (originalValue, approxSqrt, callback) {
        var improvedApproxSqrt = ???;

        var discrepancy = Math.abs(originalValue - (improvedApproxSqrt * improvedApproxSqrt));

        // Termination condition
        if(discrepancy < 0.00001) {
            return approxSqrt;
        }

        return ???;
    }

How would we implement Y in JavaScript? Here's the Y combinator again, with an extra variable because our function takes two variables rather than oen:

math

This corresponds pretty directly to a JavaScript function:

code

But when we run this on your function from above, we get infinite recursion. This is because lambda calculus is [call by name](https://en.wikipedia.org/wiki/Call_by_name) while JavaScript is [call by value](https://en.wikipedia.org/wiki/Call_by_value). In lambda calculus, $$f (x x)$$ is evaluated by expanding the *definition* of $$x x$$ and passing that function to f. In JavaScript, the x function is *actually evaluated* with x as an argument. To solve this problem we need to eta-expand the y combinator to obtain the *applicative order* y combinator:

math