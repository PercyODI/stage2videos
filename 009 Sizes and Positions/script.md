Hello, and welcome to Stage Two: Sizes and Positions. In this video we will be using CSS to adjust the size and position of elements on the page. 

We left off with this beautiful page, but I've been informed by marketing that the border is not...ideal. So the first thing I'll do is remove it. Good thing that's easy: all I have to do is remove the border declaration in the body rule-set. I'll save the file, and refresh. Ok, back to the way it was before.

If you look closely, you'll see that the blue background around the h1 element doesn't extend to the top or side of the webpage. I want it to touch the sides and the top, but the body element comes with a default setting for padding and margin.

Let's talk about padding and margin for a second. 

https://www.w3schools.com/css/css_boxmodel.asp

CSS uses a box model. Every element has its own box around it. In the middle is the content, which is what have have seen rendered to the page. Outside of the content is the padding, which is the space between the content and the border. It is invisible. Next is the border, like we have around the table, and formerly around the whole body. Outside of the border is the margin, which is the space between the border and the next element. 

It is important to note that if there is no border, the margin and padding are both still in effect. This is often the cause of double spacing that you can't figure out!

Let's open a new tool in our toolset: the Chrome inspector window! This is a powerful tool for seeing exactly how Chrome is interpreting all of our files. 

Let go back to `index.html` in chrome, and hit the shortcut Ctrl-Shift-I. I like to keep my inspector tool docked to the bottom of the page. To do that, I'll click the three dots in the upper right corner, and click the symbol for dock to bottom.

Now I will click the Elements tab. Now I can see the elements that I wrote in `index.html`. I'm going to select the body element. On the right hand side, you can see the box model for the body! Looks like there is no padding, and no border. But by default the body has an 8px margin. Because I want the the h1 to touch to top and side, I want to set the body to have a 0px margin.

Back in the `index.html` file, I will add a new rule declaration in the body rule-set. The property will be margin, and the value will be 0px. I'll save the file, refresh, and now the h1 element is touching the top and sides! Perfect!

The next thing I want to do is make the table element fill the whole width of the page. Let's add a new rule declaration to the table rule-set. I want to set the width property to 100%. Save the file, and refresh. Now it feels more full!

After we changed the body margin, both the paragraph and the table also got smooshed to the sides. I don't think I like that. I want to wrap up both the table and the paragraph into a new element that I can style. This new wrapping element is going to be the div element.

To wrap the paragraph and table, I will click before the p opening tag, type the opening tag for div, ctrl-z to remove the closing tag, and press enter to put the p element under the div element. Then I'm going to click after the closing table tag, enter, and put the closing div tag. And then Alt-Shift-F to format the document. Let's save and refresh.

Doesn't really look like anything changed. By itself, the div tag doesn't bring any content or formatting. But it is a great way of grouping elements together in interesting ways. 

Now, i'm going to write a rule-set using div as the selector. I'll set the margin property to the value 8px. Save and refresh. There! Because the paragraph and the table were wrapped in the div, they had the margin applied uniformly. 

