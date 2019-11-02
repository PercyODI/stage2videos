## Scene
Half and half, vs code and chrome

## Script

Hello, and welcome to Stage Two: The Script Element. In this video, we will be covering how to add interactivity to the page using the Script element in JavaScript.

We are back were we left off, with index.html open in VS Code, and pulled up in Chrome.

The first thing we need are some elements on the page that the user can interact with. 

Let's make some space under the h1 title element. We will create a div to wrap our elements.

The first element I want is a label. The content of this element is the text I want displayed to the user. I want to give the user the ability to input their name, so I will use make an input element. 

Input elements are special. They are considered self-closing tags, and don't contain any content. That's why we don't use a `</input>` at the end! We will also use two different element attributes; the type attribute to tell the browser what kind of data to expect, and a name we will reference in the JavaScript.

`<input type="text" name="username">`

Then I want a line break, so I'll type `<br>`.

Next I want a button for the user to click, so I'll use the button element.

`<button>Submit</button>`

Save and refresh.

Now I've got the new elements on the page, and can type into the input box! But when I click submit, nothing happens!

That's because I haven't hooked anything up to make it happen. To make something happen when the user clicks on the button, I will add a new attribute to the button element. The name of this attribute is onclick, and it's value is the method we want to call. When the user clicks the button, I want the method submitUsername to be invoked. 

`<button onclick="submitUsername()">`

Lets save and refresh.

Ok, let's click the submit button and see what happened.

Nothing seems to have changed. But if we open the chrome inspector, we will see that the console is showing us an error. "submitUsername is not defined"

Ok, I can work with that! The onclick attribute worked, but I haven't told it what submitUsername does!

To do that, I need a place to put JavaScript scripts. Let's look back in the head, make some room under the style element, and make a new element called script

`<script></script>`

Everything inside the script block is interpreted as JavaScript. Let make a function in the Script block that can be called by the HTML. 

To make a function in JavaScript, simply type function, the name of the function, and then open close parentheses. You can put input parameters inside the parenthesis, but we don't need that yet! Then curly braces and a space! Everything inside the curly braces will be run when the function is called!

```js
function submitUsername() {

}
```

Ok, now that we have a function, let's save and refresh.

Now I can click submit, and there is no error! But, nothing is happening either. Let's prove to ourselves that something is going on by using the console logger.

Let's click inside the submitUsername function, and type 

`console.log("submitUsername was clicked!")`

This simply uses the built in console object, and we call the log method on it and pass it the string we want logged.

Save and refresh.

Now when I click Submit, we see our log show up in the console! Proof that it is being called! Console logging is a common debugging technique, where you can see what your application is doing. And just like the REPL version, you can log DOM elements, and they show up in their full form!

Ok, ok. Now that I know that the method is being called, let's make it do something useful. I want the name that the user provides to be added to the title to welcome them to the page!

This is going to be a two step process. Step one is to get the value that the user typed, and then updating the title to include their name!

So, step one. We want to get the value the user typed in. They typed their name into the input box with the name username. Let's use that.

Under the console log, let's try getting the input element by its name. Let's try 

`document.getElementsByName("username")`

VS Code is actually really helpful here! It is suggesting methods that are available on the document object! But I don't really know how to get the value of the input box out. Let's log the element, and see what the REPL says.

`console.log(document.getElementsByName("username"))`

Save and refresh.

Ok, Let's click submit. I see the first log, saying it was clicked, and then I see a NodeList. This looks like an array of nodes that matched that name. There is only one, so let's use bracket notation and access index 0.  
We'll add that to the console log. 

`console.log(document.getElementsByName("username")[0])`

Save and refresh, then click Submit

Yeah! That is the correct element, but I can't see the properties available on it. If I want some more detailed information about the object, I will use the console.dir method instead of the console.log method. Let's make that change

Save and Refresh, then click submit

Ah ha! Now the console says input, and if I click the arrow, I get a list of the properties on that node!

Let's clear the console, put my name into the input box, then click submit again.

Ok, the console is showing our input again. Let's open it up and see if we can find my name!

Maybe it's in innerText? If we scroll down to it, innerText and innerHTML are blank. No help there. Let's keep scrolling.

Waay near the bottom, it looks like there is a property called `value` with a value of Pearse! Let's use that property! 

Back in the script block, let's console log the value property of that element!

`console.log(document.getElementsByName("username")[0].value)`

Note that VS Code didn't know what value was. It is smart, but not that smart!

Save and refresh, put my name back in, and click submit

There! My name is showing up in the console! Back in the script block, let's save that value to a variable, called inputVal.

`var inputVal = document.getElementsByName("username")[0].value`

Ok, step two: Let's update the title. First, we need to get the h1 element. Luckily, that element has an id, so we will use that to find it! Let's console.log it to make sure we have the right one selected.

`console.log(document.getElementById("title"))`

Save and refresh, and click submit

If we hover over the element in the console, we can ensure we have the right one selected! Since we do, we can use it to set the inner text!

Back in index.html, let's change the log to set the inner text property of the title element.

`document.getElementById("title").innerText = "Welcome to RealTimeDiary, " + inputVal + "!"`

This will keep the Welcome to RealTimeDiary text, but concatenates it with the inputVal from the user, and an exclamation mark!

Save and Refresh

If I type my name in, and click Submit, the title updates to welcome me personally! That's Awesome!

