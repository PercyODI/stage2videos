Hello, and welcome to Stage Two: CSS Positions. In this video, we are will be using some new properties to take two sections and line them up side by side. 

We left of with the h1 element touching the top and sides of the page, and the paragraph and table now have a margin around them so they don't touch the sides.

Under the table, I want to add two new sections: one for listing the top three diary entries, and another one for listing the top three users. 

In `index.html`, I'm going to scroll down to the bottom. I want these new sections to be under the table, but still in the outer div because I don't want them touching the sides of the page. So I'll click after the closing table tag, enter, and create a new div element. Inside this new div element, I want to make a smaller header and the top three diary entries. I'll put each of the three in their own p element so that they are on different lines. save and refresh. There they are! That was easy.

Now for the top three users. I'll make another div element after the top three entries div. And I'll fill it with data just the the other div. There. Save and refresh.

Well, the content is there, but not side by side. Let's open up the chrome inspector again, but this time I want to inspect the Top Three Entries. I can do that by right clicking on the the element I want to inspect, and clicking Inspect in the pop up menu. 

Here we see it took it straight to the element we right clicked in the elements tab of the inspector! That saves us a ton of time in navigating to the element we want!

Let's hover over the div element that is wrapping all of the Top Three Entries content. This will highlight the element in the page, with the content colored blue, and the margin colored orange. With this highlighting, it is easy to see that the div is filling up the page all the way to the right, even though the text certainly doesn't need that much space. This is because by default, div elements have a display value of block. A block value will fill up all the horizontal available, even if the content doesn't need it.