## Plan

- Now that I'm able to get the value and set it to the title, I want it to be a little smarter
- What happens if I have an empty text box?
- I get a comma and an exclamation mark! Not good!
- I want to detect if the text is empty, then decide what to display to the user.

```js
if (inputVal != "") {
    document.getElementById("title").innerText = "Welcome to RealTimeDiary, " + inputVal + "!";
}
```

- That works, but now if I clear out the box, I want it to reset

```js
if (inputVal != "") {
    document.getElementById("title").innerText = "Welcome to RealTimeDiary, " + inputVal + "!";
}
else {
    document.getElementById("title").innerText = "Welcome to RealTimeDiary"
}
```

- Cool!

## Scene
Half and half, vs code and chrome with inspector window open, Pearse in the text box and already submitted.

## Script

Hello, and welcome to Stage Two: Making Decisions. In this video, we will look at the if-else flow control to make decisions in JavaScript.

We left off with the text box input that allows users to put in their name, and update the title! That's cool, but what if the input box is empty? Let's try it. Clear out the text box, and click submit.

Well, that doesn't look right. The comma, space, exclamation mark are still there, but no name in the middle. It looks silly! Let's prevent that from happening.

Back in `index.html`, in the submitUsername function, let's see if we can fix this. In the function, we are currently setting the title inner text no matter the value. Let's make some space between the inputVal assignment and the title update.

In JavaScript, just like C, I can use an If statement to do something IF a the an expression is true. So, I will type if, open close parentheses, and open close curly braces

```js
if () {

}
```

Ok, inside the parentheses, we will put an expression to test for. I want to check that the inputVal is not black. 

Let's go back to the REPL to look at true/false expressions.

In JavaScript, just like in C, there are a variety of comparison operators you can use. The first is the equality comparison. For example,

`1 == 1`

In english, this says "Is one equal to one?" When we run it, JavaScript returns true. Notice that this isn't the string true, but the boolean true. A boolean type can only have two possible values: true or false.

If I said 

`1 == 2`

JavaScript returns false, because one does not equal true.

Let's try the opposite comparison operator, the not equal comparison. If I wanted to ask "Is 1 not equal to 2", I would type

`1 != 2`

The exclamation mark is a negation, so it turns into a not. If I run this, I get true, because one is not equal to 2.

We can also use inequality operators to test ranges. For example

`1 < 5`

in english is asking "is 1 less than 5". Which comes back as true!

The opposite is

`1 > 5` 

which mean "is 1 greater than 5". This one returns false, because one is not greater than 5.

I can also equal to or greater than. So

`5 > 5`

returns false, because 5 is not greater than 5, but

`5 >= 5`

returns true, because 5 is greater than or Equal to 5.

Ok, back to `index.html`

In the if parentheses, just like you would in C, I would use

`inputVal != ""`

which in english says "is inputVal not equal to empty string". Now, what do I want to do if inputVal is not equal to empty string? I want to update the title! I'll copy the line that sets the title inner text into the if curly braces.


```js
var inputVal = document.getElementsByName("username")[0].value
if (inputVal != "") {
    document.getElementById("title").innerText = "Welcome to RealTimeDiary, " + inputVal + "!"
}
```

Save and refresh

If I don't type anything into the input box, and click submit, nothing happens! We can see in the console that submitUsername is being called, but the title isn't updating! The if block is preventing the title from updating because there is no value to update to!

If I put my name in and click submit, now the title updates with my name!

There, now my page is much smarter, but what happens if I delete my name, and click submit again?

Well, it doesn't display the bad formatting it did before! But it should remove the name from the header.

Let's go back to index.html, and after the if block, let's add an else block. The else after the if only runs if the if comparison fails.

so, we will add else, curly braces.

```js
else {

}
```

And inside the else block, we need to reset the title back to what it should be. So I'll still use the document.getElementById, and set the inner text back to what it should be if there is no name.

`document.getElementById("title").innerText = "Welcome to RealTimeDiary"`

Save and refresh. Ok, let's do that all again. Put my name in the box and click submit. It is still welcoming me! Now I will erase my name, and submit. There! Back to what it was before!