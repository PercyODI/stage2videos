## Scene

## Script

Hello, and welcome to Stage Two: JSON. In this video, we are going to be working with data files in JSON Form.

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

What is JSON? JSON stands for JavaScript Object Notation. It is a data format that allows applications to communicate with each other in a shared language. It is extremely close to how JavaScript natively handles objects, but we use it all the time here. Most of my real work days here at VU involve working with back-end JSON data being passed all over the place!

https://developers.squarespace.com/what-is-json

At it basic level, JSON is a collection of key value pairs. A key is like a property name, and value is the value that property is set to. In this example, the property foo has a value of bar.

There are 5 (well, secretly 6) different types of values we can use in JSON.

Strings are just strings surrounded by double or single quotes, just like in JavaScript.

Numbers are just that: a number. When using a number, don't use any quotes, just put the numeric value as the value.

Boolean can only have the values of true or false. Don't use quotes or they will become a string.

Objects are the building blocks of json data. Objects are surrounded by curly braces, and have key-value pairs inside of them.

Arrays are just that: an array of some kind. Arrays are surrounded by square brackets, and just like JavaScript don't have to have sizes declared.

All JSON documents must start with either an Object or an Array.

Oh, the secrete type is null. If a property doesn't have a value, use the keyword null instead, to indicate no value.

For RealTimeDiary, we are going to access a JS file that will set a variable for us from JSON data. This data is going to contain some diary entries that I want to display at the bottom of my page.

Step one. Let's reference the JS file that will set this data variable. In the head element, let's make some room between the style element and the script element. We are going to create another script tag.

`<script></script>`

But instead of putting JavaScript into the content, we are going to reference an external file. We will use the src attribute, to define the source of this external file. Set the source equal to the link in the description.

`<script src="https://stage2cohort2blob.blob.core.windows.net/realtimediary/data.js"></script>`

Let's see what we're working with here. Let's save and refresh the page.

Nothing has changed, and nothing is showing in the console window. But I know what that script was supposed to do. Let's go into the console, and access the variable `data`

`data`

Looks like some kind of array with three things inside it. Let's open it up!

Yup! Three sets of data objects are inside this array! Let's open the first one and see what properties are available.

Looks like we have three properties in these objects: a date, the entry text, and the entry title.

Let's see if we can dynamically create some elements at the bottom of the page when it loads, based on the data from that file. But we don't want to put this work in the top script element: We need this to run AFTER the HTML has already been processed. Let's scroll to the bottom of `index.html`, and make some room above the closing body tag.

We'll create another script element before the closing body tag. Any JavaScript in this script block will run after the HTML has been rendered by the browser. We won't put it in a function, because we want it to run immediately.

I'm also going to create a new div right before the script element, and give it the id of entriesWrapper. This gives us a place to dynamic load up the HTML.

Ok, Let's access our entriesWrapper div.

`var entriesWrapper = document.getElementById("entriesWrapper")`

Let's also get our first entry from the JSON loaded up.

`var entry = data[0]`

data just happens to contain our entries data, and I want to just work with the first one for now.

Ok, Let's build the HTML we want to create

```js
var html = "<div>" +
    "<h3>" + entry.title + " on " + entry.date + "</h3>" +
    "<p>" + entry.entry + "</p>" +
    "</div>"

entriesWrapper.innerHTML += html
```

That might look complicated, but it's pretty straight forward. I am just building an HTML string a little bit at a time. I am able to pull out the data from the entry object just by using the dot notation, followed by the property name. At the end, I used the append operator to attach this new HTML to the end of the existing HTML in the entriesWrapper inner HTML.

Save and refresh.

If we scroll to the bottom of the page, our entry is there! Remember that none of that information is in our HTML file; it was loaded from the external resource!

This is so cool, but I remember there being more than one entry in that data array. Let's see if we can dynamically load all of those entries.

So, I could hard code three new HTML elements for the three entries, but I don't control the external resource. It could be updated at any time to contain only 2 entries, or maybe updated to contain hundreds of entries! I need to be prepared for any case. 

To be prepared, I will use a for loop to build this HTML!

Looking back in the bottom script element, I want to keep the entries wrapper, but the rest of it will need to be refactored. I'm going to comment them out so I can reference them, but not load them.

Ok. First, I need to loop over each element. Just like C, JavaScript has a flow control call the for loop! I'll type for, parentheses, var i = 0, semicolon, i < something, semicolon, i++, parentheses, and finally curly braces.

```js
for(var i = 0; i < ??; i++){

}
```

Looking good, but I need to figure out what that something in question marks should be. Let's go back to the chrome inspector, and access the data variable again.

`data`

If I open it up, I see that there is a property on the array already; the length property. I can use that, because I want to while i is less than the length of the array, and stop so I don't go past it!

Let's change ?? to data.length

```js
for(var i = 0; i < data.length; i++){

}
```

Ok, I want to see each one in the console so I know I did it right. Let's console.log, we want to log data, and use i as the indexer.

```js
for(var i = 0; i < data.length; i++){
    console.log(data[i])
}
```

Save and refresh.

We can see in the console that three different data object came back, and they seem to match what we saw earlier! Very cool! Now to build the HTML with these data objects.

In the for loop, lets create the entry variable again from data, but use i instead of 0.

`var entry = data[i]`

Now let's build the html variable the same way we did before.

```js
var html = "<div>" +
    "<h3>" + entry.title + " on " + entry.date + "</h3>" +
    "<p>" + entry.entry + "</p>" +
    "</div>"
```

And finally, let's append the new HTML to the entries wrapper innerHTML.

`entriesWrapper.innerHTML += html`

Save and refresh.

All three entries are now showing on the page, loaded dynamically from an external resource! If that isn't exciting, I don't know what is!

Ok, I think there is just one more thing we can do to make the script even easier. In C, you had to write for loops the way we just did for the data. But JavaScript also provides a for-of syntax that makes it even easier to loop over an array of things.

Back in the for loop, let's clear out the code in the parentheses. This time, I want to write var entry of data. This means for each object in data, make a variable called entry, and run the for loop on it.

I will delete the first two lines, since I no longer need a console, and entry is being made by the for loop. Nothing else had to change, because I just so happened to use the same variable name as before.

Save and refresh.

There we go! Now the data is still there, and the for-of loop makes the code much cleaner!

As a primarily back-end developer, I tend to get pretty excited about data structures and formats. Data is truly what runs the world now, and I'm glad I get to teach you all about it! See you next time!