---
layout: post
title: The Pipe Optimization Problem
tags: puzzle
---

GitHub provides a great service called [GitHub pages](http://pages.github.com/), which allows you to host static web sites from GitHub servers by simply pushing a repository containing the content. GitHub founder Tom Preston-Werner wrote a fantastic blog platform called [Jekyll](https://github.com/mojombo/jekyll/) to fit this hosting model. Blog authors can write their posts in [Markdown](http://daringfireball.net/projects/markdown/) and Jekyll will render the posts to HTML and generate an entire site structure of static pages suitable for hosting with GitHub Pages. The whole process is highly customizable, since Jekyll is based on the [Liquid templating language](http://liquidmarkup.org/). And it makes sense- if it weren't for user comments (which some Jekyll users handle with [Disqus](http://disqus.com/)) there would be no reason at all for having a whole scripting lanugage and database engine behind an otherwise static blog. Of course you've probably guessed that this post is published through that system. The complete source code and some comments about setting up your own blog are available in [here](https://github.com/briangordon/briangordon.github.com). 

Besides playing with GitHub, I've also been working on my reading list over the break. Other than fiction, I've' been reading through some textbooks which I have been fortunate enough to recieve for free thanks to financial aid. One of these books is [Introduction to Algorithms](http://mitpress.mit.edu/algorithms/) (in my algorithms sections at the University of Maryland we used [Manber](http://www.amazon.com/Introduction-Algorithms-Creative-Udi-Manber/dp/0201120372) and [Kleinberg & Tardos](http://www.amazon.com/Algorithm-Design-Jon-Kleinberg/dp/0321295358) instead), which I have discovered has some excellent exercises- perfect little puzzlers for a blog format! Today's puzzle is based on exercise 9.3-9 in the 3rd edition.

## The problem

A number of well pumps have been built in arbitrary positions throughout a region. An east-west pipeline is to be built through the area with north-south connections to each pump off the main pipeline. Your task is to decide where to place the pipeline so that the total length of pipe that needs to be laid is minimized. An example region map is below; click the image to expand it. 

[![An overhead map showing four pump stations. A pipe runs east-west through the center of the area. Shorter pipes running north-south connect each pump station to its closest point on the main east-west pipe.](/images/optimal-thumb.png)](/images/optimal.png)

The example above is, in fact, a solution- you cannot find a better place to put the east-west pipeline. So how do you find an optimal position in general, given the coordinates of each pump?

## The solution

You might be tempted to suggest that the pipeline be placed along the mean y-coordinate of all of the pump stations. It seems to be clear that the pipeline should be laid roughly through the center of the constellation of pumps, since we're trying to minimize the distance to each pump. This geometrical intuition turns out to be wrong in rather the same way that our as-the-crow-flies pathfinding intuition is [wrong in cities](https://en.wikipedia.org/wiki/Taxicab_geometry)- the unusual way of accounting for distance foils the obvious solution. I hope that examining an example of using the mean will convince you that the mean doesn't work; click the image to expand it.

[![An overhead map showing five pump stations. A pipe runs east-west through approximately the mean of the y-coordinates of the pumps. Shorter pipes running north-south connect each pump station to its closest point on the main east-west pipe.](/images/suboptimal-thumb.png)](/images/suboptimal.png)

The correct answer is to use the *median* of the y-coordinates. The easiest way to see why this works is by considering the case where there are an odd number of pumps, for example 5. The median, then, is the latitude line through the third pump sorted by y-coordinate. Say we move the pipeline from the median to just one meter north of the median. Then the lengths of two vertical connectors (to pumps 4 and 5) will decrease by one meter, and the lengths of three vertical connectors (to pumps 1, 2, and 3) will increase by one meter. In sum, the total length of pipe will increase. The same thing will happen if you move the pipeline just one meter south.

If we have an even number of pumps, say 6, the solution is that the pipeline can go anywhere vertically between pumps 3 and 4. It should be clear that you can move the pipeline up and down within that range without changing the overall total length, because three vertical connectors increase and three decrease in lockstep. It's only when you move outside of that range that an asymmetry appears.