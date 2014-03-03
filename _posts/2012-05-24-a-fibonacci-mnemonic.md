---
layout: post
title: A Fibonacci mnemonic
tags: math
---

The Fibonacci sequence is:
$$1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...$$
Each term is the sum of the previous two terms in the sequence. Terms in the Fibonacci sequence are pretty easy to spot. An interesting property of this sequence is that it works as a mnemonic for converting miles to kilometers. For example, 21 is followed by 34 in the Fibonacci sequence, and 21 miles is [about 34 kilometers](https://encrypted.google.com/search?q=21+miles+to+kilometers). Likewise, 34 is followed by 55 in the Fibonacci sequence, and 34 miles is [about 55 kilometers](https://encrypted.google.com/search?q=34+miles+to+kilometers).

Why does this work? The short answer is that the Fibonacci numbers grow with \\(\varphi^n\\), and \\(\varphi\\) is approximately the conversion constant from miles to kilometers. More exactly,
<p>$$\lim_{n\to\infty}\frac{F_{n+1}}{F_n}=\varphi$$</p>
The value of \\(\varphi\\) is about 1.62, and 1 mile is about 1.61 kilometers. So successive terms in the Fibonacci sequence are approximately converting miles to kilometers! And, of course, to convert in the other direction you simply look at predecessive terms.

A couple of techniques are useful for when the number you want to convert isn't exactly a Fibonacci number. If you want to convert 17 miles to kilometers, you could look at the conversions for Fibonacci numbers 13 and 21 and try to interpolate the answer. However, since 34 is a Fibonacci number you can get a much better answer by converting 34 miles to 55 kilometers and dividing by 2. 

You could also change the initial conditions of the recurrence. A Fibonacci sequence with general starting conditions \\(F_{0}, F_{1}\\) is called a Lucas sequence. Because when solving a linear homogeneous recurrence relation the starting conditions don't affect the relation's characteristic equation, a Lucas sequence also grows with \\(\varphi^n\\), and the mnemonic applies. So you have more data points to work with if you also memorize, for example, the sequence:
$$1, 3, 4, 7, 11, 18, 29, 47, 76, 123, 199, 322...$$

For more mathematical coincidences, see [the Wikipedia article](https://en.wikipedia.org/wiki/Mathematical_coincidence).