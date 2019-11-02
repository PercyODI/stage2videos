- Now, I want a button I can click to make a new entry. First, let's add the button to the bottom of the page.
- I'm going to have the text say New Entry, and on click I want to invoke the showNewEntry method.
- What I need is some HTML that allows users to type in a new entry, but I only want it to show up on the button click.
- Let's first write out the HTML for the new entry.

```html
<div class="newEntry">
<label>Title of Entry</label>
<br>
<input type="text">
<br>
<label>Entry</label>
<br>
<textarea name="newEntryText" class="full"></textarea>
<br>
<button>Submit New Entry</button>
</div>
```

- Now there are the elements, but I don't want to show them unless the user clicks the button. 
- Let's give the element the class hidden
- Let's start with hidden classes having a display of `none`
- Now they're gone! 
- Next I need to write the showNewEntry method.
- Let's find the class I set display to none on, and turn off the hidden class

```js
function showNewEntry() {
    document.getElementsByClassName("hidden")[0].classList.remove("hidden");
}
```

- I also want the new entry button to disappear! Let's add that to the showNewEntry function.

```js
function showNewEntry() {
document.getElementsByClassName("hidden")[0].classList.remove("hidden");
document.getElementById("newEntryButton").classList.add("hidden");
}
```

- Very Cool! 
- Last thing. when I add a new entry, I want the title to go into the entry table.

```js
function submitNewEntry() {
    var newEntryTitle = document.getElementsByName("newEntryTitle")[0].value;
    document.getElementsByTagName("tbody")[0].innerHTML += "<tr><td>" + newEntryTitle + "</td></tr>"
    document.getElementsByClassName("newEntry")[0].classList.add("hidden");
    document.getElementsByName("newEntryTitle")[0].value = ""
    document.getElementsByName("newEntryText")[0].value = ""
    document.getElementById("newEntryButton").classList.remove("hidden");

}
```