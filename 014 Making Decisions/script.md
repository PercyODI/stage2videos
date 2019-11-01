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
