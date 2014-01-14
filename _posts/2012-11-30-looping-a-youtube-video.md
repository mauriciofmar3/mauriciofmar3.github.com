---
layout: post
title: Looping a YouTube video
tags: tips
---

Last night I was trying to figure out a [balisong](https://en.wikipedia.org/wiki/Balisong_%28knife%29) trick by watching 15 seconds of a YouTube video over and over while trying to duplicate the movements with my own knife. Switching back and forth between my mouse and my knife was getting annoying, so I took a few minutes to figure out how to control the player with JavaScript. This is how I did it.

First, get the `<embed>` DOM object. The best way to do this is by using the DOM inspector in your favorite browser to find the ID string of the element. Right now that ID is `movie_player`, but YouTube mught change it in the future. 

![A screenshot of Firefox's DOM inspector](/images/movie_player.png)

Once you have the ID string you can get the DOM object using `getElementById` in your browser's JavaScript console.

``` javascript
var ytplayer = document.getElementById("movie_player");
```

Now you can use any of the functions of the [YouTube player API](https://developers.google.com/youtube/js_api_reference#Playback_controls), which are properties of the DOM object we just found. For example, `seekTo` will take you to a given point in the video. So if you want to go back to 1:01 in the video every ten seconds then you can use `setInterval`:

``` javascript
setInterval(function () { ytplayer.seekTo(61, true); }, 10000);
```