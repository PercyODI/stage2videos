Hello, and welcome to Stage Two: CSS Positions. In this video, we are will be using some new properties to take two sections and line them up side by side. 

We left of with the h1 element touching the top and sides of the page, and the paragraph and table now have a margin around them so they don't touch the sides.

Under the table, I want to add two new sections: one for listing the top three diary entries, and another one for listing the top three users. 

In `index.html`, I'm going to scroll down to the bottom. I want these new sections to be under the table, but still in the outer div because I don't want them touching the sides of the page. So I'll click after the closing table tag, enter, and create a new div element. Inside this new div element, I want to make a smaller header and the top three diary entries. I'll put each of the three in their own p element so that they are on different lines. save and refresh. There they are! That was easy.

Now for the top three users. I'll make another div element after the top three entries div. And I'll fill it with data just the the other div. There. Save and refresh.

Well, the content is there, but not side by side. Let's open up the chrome inspector again, but this time I want to inspect the Top Three Entries. I can do that by right clicking on the the element I want to inspect, and clicking Inspect in the pop up menu. 

Here we see it took it straight to the element we right clicked in the elements tab of the inspector! That saves us a ton of time in navigating to the element we want!

Let's hover over the div element that is wrapping all of the Top Three Entries content. This will highlight the element in the page, with the content colored blue, and the margin colored orange. With this highlighting, it is easy to see that the div is filling up the page all the way to the right, even though the text certainly doesn't need that much space. This is because by default, div elements have a display value of block. A block value will fill up all the horizontal space available, even if the content doesn't need it.

Because it fills up all the horizontal space, nothing else can fit next to it like I want it to. So to fix this, I need to change the display property from block to inline-block. Let's look at the rule-set for div. I will add a new rule declaration, with the property being display, and the value being inline-block. Save and refresh.

Ah ha! now that it is an inline-block, the horizontal space is freed and and the other div can fit next to it! But now there is some awkward space to the right of the top three users list that isn't even with the left side. I know, let's set the width of the divs such that they take 50 percent of the space available. That way they will evenly divide the space between the two lists.

I'll go back to the div rule-set, and add a new rule declaration. I will use the width property, and set its value to 50%. Save and refresh.

Wait! What happened? Why is the whole page only taking up 50% of the page?

It's because the page is wrapped in a div as well! When we set the rule for div to have a width of 50%, it also affected the wrapping div! For this to work, we are going to have to be more specific about which elements we want to affect.

Let's scroll back down to the two divs we added. In addition to element names, we can also add element attributes to the opening tags. Every element attribute consists of a property name, an equal sign, and the value. We are going to use the class attribute to signal which elements need to be set to 50%.

Let's click inside the opening tag of the Top Three Entries div, after the word div but before the right angle bracket. The attribute is called class, then an equal sign, then the value half inside double quotes. Now this div has a class of half applied to it. Let's copy that attribute from the first div and also apply it to the second div. Let's also remove the 50% width from the div rule-set. Save and refresh. 

Look like we're back where we were before. The page is back to full width, but the two lists are not at 50%, and we can see that by hovering over the div's in the inspector and see that there is extra space to the right of the Top Three Users.

Let's add a new rule-set. But this time, instead of using a property name as the selector, we want to use the class name. When using class name as a selector, we have to preface it with a dot.

So, lets make some space after the div rule-set. We will write dot, half because the class we want to target is the half class. Now we can write a rule setting width to 50%. Save and refresh.

What now?! Why are they stacked on top of each other now? CSS has a couple of gotchas we have to work through here. The first is that width does not take into account padding, border, or margin. Both of our divs have an 8px margin, because that's what the div rule-set tells them to. So, we will override the margin of the div in the dot half rule-set. I'll just set the property margin to a value of 0px. Save and refresh.

We are still stacked up. Ok, gotcha number two. Inline-block display's take into account the white space in the HTML. So even though they should be sitting next to each other, because the HTML has them one under the other, that is why it is displaying that way. No worries, CSS has a work around for that too.

In the div rule-set, we will set the property white-space to the value nowrap. Save and refresh. 

Oh come on! Why is the page super long now? I mean, technically the two lists are now side by side, but I don't want users to have to scroll all the way to the right!

Ok, the probably appears to be the p element. When we told the div element to nowrap the white-space, that also was applied to the p element, and since it is no longer allowed to wrap it had to continue all the way to the right.

That's ok, we can solve this too. We will add the white-space property to the p rule-set, with the value set to normal. Save and refresh.

There! Much better! Now the two lists are side by side, users don't have to scroll all the way to the right. And if we hover over the lists in the inspector we can see that they indeed fill up all the space!

Now, you may be asking how on Earth you are expected to know all of these gotchas and workarounds. And the answer is simple: you aren't! HTML, CSS, and JavaScript are full of weird snags and workarounds that have been building up since the beginning of the web. 

https://stackoverflow.com/questions/6871996/two-inline-block-width-50-elements-wrap-to-second-line

While writing this video, I had to Google several times what was happening. After several StackOverflow questions I finally figured out what my issue was and used the workarounds. Programming is more than just memorizing everything. There is no way you can memorize it all. Instead, there is a science and an art to finding solutions by looking through documentation, google, stack overflow, and other resources and forums. We do it all the time, and there is certainly no shame in it!

I am very happy with how this has turned out! I can't wait to push this up to GitHub so the world can see!