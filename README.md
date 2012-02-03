My Personal Blog
----------------

First of all, thanks to Basil Shkara, from whom I borrowed [a nice looking layout](http://www.neat.io/posts/). The style sheet is almost entirely his, although all other code was reconstructed from scratch.

I believe that I've nailed exactly how Jekyll layouts are "supposed" to be set up, so this *should* serve as a useful example if you want to make your own. I'm not sure about two things:

1. `index.html` and `post.html` contain almost the same HTML code for the markup around the `{{content}}`. I'd love to factor this out, but `index.html` requires, for example, `post.title`, while `post.html` requires `page.title`. I'm not sure if there's a better way to deal with it than having duplicate code. 
2. `index.html` violates [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) as a side effect of handling the first post separately. This seems to be necessary - I want a separator to appear *between* posts, but not at the bottom  where it looks bad. The code is a little smelly to me but I'm not confident enough with Liquid to make it nicer