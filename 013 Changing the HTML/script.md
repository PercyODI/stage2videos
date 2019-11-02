## Scene

RealTimeDiary full screen, with a cleared Console visible.

## Script

Hello, and welcome to Stage 2: Changing the HTML. In this video, we are going to use JavaScript to do some DOM manipulation!

https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

DOM stands for Document Object Model. The DOM is the HTML of your webpage, as a collection of nodes and objects. What does that mean for us? This means JavaScript can tap into these nodes, and when we make changes to the node, we change the page itself. 

We are still in the console. If you haven't noticed, the Chrome Console is a super powered REPL! Not only does it display the return of expressions like any other REPL, but also has a lot of features for digging deeper into objects. We saw that with the arrow on the array!

Ok, back on the Real Time Diary page, I've got the Chrome Inspector open with the console tab selected. To access anything on the DOM, we have to call the document. If we type

`document`

we can see the nodes available. The document is the root, or top, of our HTML. Be sure to use lower case document; Document with a capitol D is a completely different thing!

You also may notice that the page was highlighted blue! Like I said: super powered REPL! It is showing which element you are accessing in the console. In this case, we are accessing the whole page, so everything is highlighted.

The return just says #document, but has an arrow next to it. Let's click the arrow.

Well, this looks familiar! The document is just the HTML! But under the hood, each element in here is a node that we can manipulate in JavaScript!

Ok, let's collapse all the document nodes so they are out of the way. 

I want to select a specific element by its id. Back in the `index.html` source code, I am going to find the h1 element, and give it the attribute id, with a value of title. In HTML, ids are supposed to be unique. Only one element should have a specific id. This is different than classes, where many elements can have the same class.

Ok. I'll save the file, and refresh it in Chrome. Back in the inspector, I want to find the h1 element by its id. Good thing this is super easy in JavaScript. I will type `document`, because it is the root of the page. Then `.getElementById("title")`. Get element by Id is a method on the document, and the property is the string id I used in the HTML. Let's run this and see what happens

`document.getElementById("title")`

And there it is! Because the h1 tag has the attribute id set to title, it was returned to the console! 

Once I have an element, I can call methods and properties on it! For example, if I didn't want the whole node, but just the text content, I could use the `innerText` property. I'm going to click the up arrow to reference the expression I wrote before, then add `.innerText`

`document.getElementById("title").innerText`

Now I no longer get a node, but just the string version of the text that was inside the h1 tag!

Just like I can get the text by calling `.innerText`, but what happens if I try assigning it to a new value?

`document.getElementById("title").innerText = "Changing the Title!"`

Woah! Not only did it return the new text, but if we look back at the webpage, the title has changed!

This is the power of the DOM! You can think of it as a living object. When you make a change to the DOM, it is instantly reflected in the webpage!

I could also add new HTML inside of a DOM node. Instead of the innerText property, I would modify the innerHTML property. Let's see what the innerHTML property is set to now.

`document.getElementById("title").innerHTML`

Looks like it's the same as the inner text. That's because there is no other HTML inside the title. But we can change that. I'm going to set the title, using a strong tag to make something the word Title italic

`document.getElementById("title").innerHTML = "Changing the <em>Title</em>!"`

Boom! Now title is italic. If I ask for the title's inner HTML, you will see the em tags:

`document.getElementById("title").innerHTML`

See that the word title is surrounded by em tags. But what if I ask for the inner text?

`document.getElementById("title").innerText`

Oh, that's cool! While inner HTML had the other tags in the string, inner text removed them and only returned the text itself! That could be useful!

Ok, what if I don't have an Id to get the element. For example, what if I wanted to look at all the table rows.

We still want to use document, but this time we will getElementByTagName, and use tr as the string, because I want all the table rows.

`document.getElementsByTagName("tr")`

This time, I didn't just get one element, but four! Because there are four table rows. The object that was returned is called an HTMLCollection, but we can treat it like a fancy array!

Let's click the arrow, and see what's inside. Inside the HTMLCollection, there are the four tr's. If we hover over them, we will see them highlighted in the web page!

Let's open up the second one. Woah! That's a lot of properties! Every DOM Node has a ton of properties that we can use to manipulate the page, but don't let it overwhelm you! You can ignore all of them, until you get more comfortable with the DOM.

Let's modify the second tr. I can get to it by typing everything before, but then use the bracket notation to get to the second one, which would be at index 1.

`document.getElementsByTagName("tr")[1]`

There we go! That is the tr I want to look at, but I don't want to have to type that whole thing everytime. Lets set it to a variable for easy access!

`var tableRow = document.getElementsByTagName("tr")[1]`

Once again, undefined is returned but expected. Let's just type the variable name

`tableRow`

There! Easy access to our element!

Let's see what the innerText is

`tableRow.innerText`

Once again, innerText is JUST the text! All the trs and tds got stripped away! I could try setting the innerText.

`tableRow.innerText = "A Different Entry 11/11/2019 Pearse"`

Yikes! When I set the inner text, all the trs and tds went away, and it messed up our formatting. I should definitely use inner HTML in the future to preserve the formatting!

`tableRow.innerHTML = "<td>A Different Entry</td><td>11/11/2019</td><td>Pearse</td>"`

There, much better!

I can also select elements by their class name! Just like with their element name, I'm going to get an array of them because multiple elements can share a class. Let's try getting the two half divs

`document.getElementsByClassName("half")`

There we go. I've now got those two divs available. Let's select the first one by using bracket notation and using index 0.

`document.getElementsByClassName("half")[0]`

Now let's remove the half class from this element. That is possible by accessing that elements class List

`document.getElementsByClassName("half")[0].classList`

This shows that the element has one class, "half". To remove the half class, we simply use the method `remove` on the classList

`document.getElementsByClassName("half")[0].classList.remove("half")`

The return is undefined, but something moved in the HTML. What happens if we look at the list of elements by class name half now?

`document.getElementsByClassName("half")`

Now there is only one element in the list! That's because when we removed the half class from the first element, it no longer shows up in the list! Let's add that class back to it! We need to find the div again. Let's find all the divs

`document.getElementsByTagName("div")`

There are four divs, but by hovering over each one, I know that I want the div at index 2. Let's access that one

`document.getElementsByTagName("div")[2]`

Nice! Now I want to add the half class back to the div. I'll access the classList property, and use the add method to add it back

`document.getElementsByTagName("div")[2].classList.add("half")`

There! I can confirm by getting the list of half elements again:

`document.getElementsByClassName("half")`

Back to two classes! I also definitely saw the div snap back into place! Awesome!


Now that I've done some things to the page, what happens if I refresh?

Everything is back to the way it was before! The changes that JavaScript makes to the page are temporary. They only last for the life of that page. Once the page changes or is refreshed, all those changes go away!

Ok, enough REPL work. In the next video, we will start to add JavaScript to our `index.html` page!