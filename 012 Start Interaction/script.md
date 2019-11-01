- Add id to h1 tag
- Add div for inserting name (label, text input, and button)
- Add script block to header
- Add function to script block (submitUsername)
- Go to Chrome inspector and pull up Console
- Talk about expressions
    - Math expressions
    - String expressions
    - Remember when you were in C and types really mattered? Welcome to JavaScript!
- Talk about declaring variables
    - var

```js
var num = 5
undefined
num
5
num + num // If they are both numbers, they get added together
10
num + "7" // If one is a string, they are concatenated
"57"
num = "5" // I can reassign a variable to a completely different type
"5"
num + num // Now that num is a string, they are concatenated!
"55"
```
- Talk about arrays

```js
var arr = [0, 1, 2, 3, 4]
undefined
arr[0]
0
arr[1]
1
arr[10]
undefined // Unlike C, JavaScript doesn't throw a fit here! It's just undefined!
```

- Talk about getting elements by id
    - Look at innerText
    - I can get the innerText just by writing `.innertext`
    - I can set the innerText by assigning it like a variable
    - When I change the innerText, the webpage also changes!
- Talk about getting elements by element (tag name)
    - This time I get an "HTMLCollection". But I can treat it like an array. To get the first div, I'll just use the array accessor and type 0.
    - Then I can start setting properties on the html element itself!
- Talk about getting elements by name
- Now that we have done a bunch of stuff to the page, what happens if we refresh?
    - All that work is gone. JavaScript only runs on the page while it is loaded. Once you refresh, everything is reset to how it was before.