- Intro to CSS
- The Body and Head elements
- Anatomy of a CSS rule-set (https://www.w3schools.com/css/css_syntax.asp)
    - Selector
    - Declaration
        - Property 
        - Value
- Changing font color using CSS color text
- Changing background color using Hex value

Hello, and welcome to Stage Two: CSS Colors. In this video, we will start adding some colors to our pages to really make them pop!

We left off with the header, the paragraph, and the table of diary entries! I have zoomed in a little bit so it is easier to see!

HTML defines the content of a web page, such as the text, images, and videos it renders, as well as meaningful structures like headers, paragraphs, and tables. What HTML doesn't do is define the formatting of a web page! I doesn't tell the browser what colors to use, or how to align the text. Instead, we use CSS!

CSS stands for Cascading Style Sheets. Just like HTML, CSS is not a programming language. Instead, it is a collection of rule-sets that define how to format HTML elements. 

First, we need to find a place in the HTML to define our CSS. For this, we need to make some adjustments to our page. I am going to wrap all of the text in our `index.html` file in a new element, the body element. Everything in the body is what the browser will use to render onto the screen. 

To add the body tag, I will click before the h1 element, press enter and move back up to the space created, and create a tag with the name body. Use Ctrl-Z to remove the ending tag, then move your cursor all the way to the end of the last line. Press enter, and type the closing body tag! Now we are really nesting our HTML!

Remember that nested elements should be tabbed over so it is clear to us what level each element is. But, as a lazy developer, I'm not going to go through and press tab on every single line! Instead, I will use the VS Code shortcut Alt-Shift-F. See! This shortcut auto-formats the document so I don't have to! 

Ok, now that we have the body all wrapped up, its time to create a new element to define the metadata about the page. This element won't be rendered like the body, but instead contains data about the page that the browser will use to make decisions about the page.

This new element is the head element. I will give myself a new line above the opening body tag, and create the head element.

That was easy! Let's save the page and refresh the page in Chrome. If all goes well, nothing changes! This is because we haven't changed anything about how the page should render. Secretly, Chrome has been wrapping our HTML in a body element anyways, so everything looks the same!

Now for some styling. CSS rules go into a style element, so let's create that first. Inside the head element, I will create a style element. 

Now that we have all the elements we need for CSS styles, we can start to write some rules. There are two parts to every CSS rule: the selector and the declaration. Every declaration consists of a CSS property, and the value we want that property set to.

Ok, lets right some rules! The first thing I'm going to do is change the color of the header element. Lets give it a dark blue background color so it will really stand out.

First, we must choose a selector. Because my header uses a h1 element, I can use the characters h1, followed by a left curly brace and press enter. This gives me some room for writing CSS rules. Because I want to change the color of the background, I will use the background-color property, followed by a colon, and the word darkblue. And don't forget the semicolon, so the declaration knows that we are finished wth that rule.

You should see VS Code show a sample of the color we picked! Thanks VS Code! If we save the file, and refresh in Chrome, we will see the change!

Thats cool, but now I can't see the text very well because it's black and darkblue. Let's fix that by changing the text color to white. Back in the h1 rules, lets click after the semicolon, enter, and use the property by writing the word color, colon, and the word white.

Lets save the file, refresh, and there we go! Now it really pops!

Now lets change all the text, to fit with the new color pallet. 

Above the h1 rule, I'm going to use the body selector, to select everything in the body. I'll use curly braces to wrap the declarations, and then set the color property. This time, instead of using word for colors, I'm going to be more specific with the color hex value. I'll start the hex value with a pound sign, then 00, 00, 80. Hex values are done in Red, Green, Blue, so this color is 00 Red, 00 Green, and 80 blue. 00 is the lowest value, while FF is the highest value.

Don't forget the semicolon! Then save the file, refresh, and now all the text is darkblue! Awesome!

One last thing. I want the made the header of table a different color, so it is more clear. After the h1 rule, I will press enter, type thead, curly braces, and lets use the same colors we did with the h1: color: white, and bbackground-color: darkblue. Now it is really obvious the it is the header of the table!

Now that we CSS, we can really start to pull this page together! I'll see you in the next video!