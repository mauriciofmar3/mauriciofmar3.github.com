---
layout: post
title: Counter-Strike&#58; Source ladder climbing
tags: gaming
---

I have been playing [Counter-Strike: Source](http://store.steampowered.com/app/240/) off and on since its release in late 2004. Gameplay largely consists of playing the same short scenarios over and over against different opponents. Over the course of hundreds of hours of gameplay, everything from tiny obstructions in the game levels to the feel of the recoil of each weapon is inevitably memorized and incorporated into players' muscle memory. Players continually search out better tactics, tune their game client configurations, and generally try to develop a better feel for the Source engine.

I say all of that in the hope that with the above introduction, the next sentence won't seem overly bizarre: **I've been wondering for years about the most efficient way to climb a ladder.**

Typically to climb a ladder in a first-person shooter, the player (1) walks forward into the ladder while looking up. But what happens if you (2) back into the ladder while looking down? What happens if you (3) strafe sideways into a ladder while facing off to the side? What happens if you (4) face 45 degrees to the right of the ladder and then walk diagonally forward and left? In the case of the Source engine, 2 produces the same upward movement as 1, 3 produces no movement, and 4 produces up to 142% of the upward movement of 1 and 2 depending on where you're looking vertically.

To get exact times for each possibility, I created [this test map](/images/climbtest.vmf) ([screenshot](/images/climbtest0000.jpg)) with the Source SDK. The idea was to climb the ladders with each technique, record the climbs, and examine the video to get the exact time for each climb.

[![A screenshot of the Hammer editor.](/images/hammer-thumb.png)](/images/hammer.png)

Unfortunately, the second variable in play - the *vertical* angle that the player is facing when they climb the ladder- has a huge influence on the speed of the climb. What I really want is to rank the times using the optimal vertical angle for each technique. It would be extremely difficult to determine the optimal angle and control it experimentally, so I cheated!

Because of the game's physics model, if the player gets up to speed and reaches the top of the ladder, then he or she will sail upward a short distance past the top before falling back down. By trial and error, I determined that it's impossible to clear more than 53 [units](https://developer.valvesoftware.com/wiki/Dimensions) using techniques 1 and 2, and it's imposible to clear more than 105 units using technique 4. **Those maximum distances can only be cleared at very close to top speed.** So I jump around trying to find the optimal vertical angle which will clear the first height at the bottom of the track. Then I let go of the mouse and record a climb the rest of the way up at top speed!

Here are some recordings of the forward and diagonal methods. It takes about a minute to find the exact angle where it works, but I cut that part out.

<br />
<div style="text-align:center;">
<iframe width="560" height="315" src="http://www.youtube.com/embed/NNV6hE79g_s?autoplay=1&loop=1&playlist=NNV6hE79g_s&controls=0"> </iframe>

<iframe width="560" height="315" src="http://www.youtube.com/embed/lBFp3R90_Yc?autoplay=1&loop=1&playlist=lBFp3R90_Yc&controls=0"> </iframe>
</div>

The final results: technique 1 and its variant 2 climb at about 281 ups (units per second), and tecnique 3 and its variants climb at about 399 ups. That's 42% faster!