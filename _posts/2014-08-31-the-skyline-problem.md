---
layout: post
title: The skyline problem&#58; an intuitive approach
tags: programming
---

I found an algorithmic problem, called the skyline problem, which is interesting *and* which can be solved with the tools available to any sophomore computer science student. I think it makes a great interview question for this reason. I'm going to take you step-by-step through the process of how anyone with knowledge of basic data structures can solve the skyline problem by thinking algorithmically. This material is targeted toward beginning students, but anyone can benefit from having another solution in their repertoire. 

A description of the problem follows.

You are given a set of rectangles in no particular order. They have varying widths and heights, but their bottom edges are collinear, so that they look like buildings on a skyline. Specifically, for each rectangle you're given the x position of the left edge, the x position of the right edge, and the height of the rectangle. The rectangles can overlap arbitrarily. Your task is to draw an outline around the buildings so that you can see what the skyline would look like when silhouetted at night.

<script type="text/javascript" charset="utf-8" src="js/skyline1_edgePreload.js"></script>
<div id="Stage" class="EDGE-540608186" style="width:200px"></div>

