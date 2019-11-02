## scene



## script

Hello, and welcome to Stage Two: First Look at JavaScript. In this video, we will start our journey in JavaScript!

JavaScript is the de-facto programming language on the web, and in my opinion is the complete opposite of C!

<!-- https://techbeacon.com/app-dev-testing/javascript-vs-other-languages-live-long-prosper -->

<!-- I don't think this is necessary -->
<!-- Let me give you a few examples. Remember when you had to compile C before you can run it? JavaScript is interpreted by the browser, so no need to compile!  -->

Let's look at how to use JavaScript using the building REPL in chrome. 

https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop

A REPL is a Read-Eval-Print Loop. Basically, it means you can type expressions in a programming language one line at at time, and it will evaluate them one at a time. This is popular in interpreted languages like JavaScript and Python.

To get to the Chrome JavaScript REPL, we will go back to `index.html` in Chrome. Then we need to open the Chrome inspector using Ctrl-Shift-I. Then, next to the elements tab, we will click Console.

<!-- Be sure to zoom in the inspector -->

Inside the console, there is a carrot pointing at our blinking cursor. The console is prompting us to enter an express, much like how you could read user input in C. 

Lets start with some math. Everyone needs a quick calculator, right! So, I'll just type a simple math expression, `5 + 5`, and then hit enter.

Immediately after the expression, the console evaluated it and returned the value! All the normal math operations are available, just like they were in C.

Subtraction using the minus sign

`5 - 5`

Multiplication using the asterisk

`5 * 5`

and Division using the forward slash

`5 / 5`

Also just like C, the order of operations is preserved. So

`5 + 6 / 6`

will do 6 divided by 6 first, then add 5. The result being 1.

If we wanted to do the addition first, we would wrap `5 + 6` in parenthesis. Just like in C. So

`(5 + 6) / 6`

is 11 divided by 6, which is 1.833. Also note how easily JavaScript interpreted the math of 3 integers and returned a float. If you remember in C, you had to choose what kind of number you wanted to use, whether that be an integer, a double, or a float. JavaScript treats all numbers the same: double. So you don't have to worry about doing math or conversions between the number types. They're all the same!

Ok, enough math. I didn't get into computer science to do math! Let's look at some strings. Coming from C, you're really going to like this!

Remember that a string is an array of chars. In C you had to declare your variable as an array, and treat it as such. You also had to know ahead of time how many characters you were going to support in that array, and deal with things like wasted array positions and null terminating operators.

In JavaScript, getting a string is easy. All I have to do is use a double quote, write what I want to write, and close with another double quote!

`"I am a string!`

When I hit enter, JavaScript returns that same string back to us! I could also use single quotes if I wanted!

`'I am a string!'`

Super easy! Now let's concatenate two strings together to form a bigger string! To do that, I'll simply add them together.

`"I'm just a string!" + "Yes, I'm only a string!"`

There we are! The plus operator concatenated the two strings together into one string! Note that it didn't know to add a space between the two strings, so we have to do that ourselves.


`"I'm just a string! " + "Yes, I'm only a string!"`

There we go, much better! What happens if I want to add a string and a number together? We'll, let's try it!

`"I'm just a string! " + 5`

Interesting. JavaScript took the number, and made it a part of the string! JavaScript assumed you wanted to take that number and make it part of the string!

Be careful though! If you have a number in a string, it is a string, not a number! For example:

`"5" + 5`

You might think it's going to be 10, but when we click enter...it returns 55! This is because JavaScript just added 5 to the string 5.

Ok, we've looked at simple expressions. Let's add some variables!

Making a variable in JavaScript is easy: we will use the expression var, name of the variable, equal sign, and the value. Let's make a variable and set it to the value 5.

`var num = 5`

After I click enter, JavaScript returned undefined. Don't worry. This is only because variable declarations don't have a return type. But if we want to see the value of the variable five, we would simply type the variable name!

`num`

There is my value! Just like in C, I can now use that variable and can change it as needed! For example, I could add num to itself.

`num + num`

The return is 10, which is indeed 5 plus 5. But if I call just num again

`num`

The value is still 5. Makes sense. I didn't change the value of num. I just used it in an expression. If I wanted to change it, I would just reassign it.

`num = num + num`

It returned 10 again, because that is the value of the expression is 10, but if I write just num again, I'll get 10 again, because num has been changed to equal 10.

`num`

What if I want to concatenate the value of a variable to a string? Simple, just use the + operator.

`"The value of num is " + num`

Easy!

Now, what if I tried to assign num to something else. Remember that we have already assigned num to a number. Let's try this:

`num = "I'm not a number"`

Wait, why didn't JavaScript throw an error? If you did this in C, we would be told that we can't assign a string (or char array) to a variable of type double!

In JavaScript, we make no such variable type declarations! A variable simply points to a value; JavaScript does not care what that value is. Coming from C, this is extremely freeing! But, with great power comes great responsibility! If I'm not careful, I might think num is still a number, but if I try to treat it like a number, say 

`num / 5`

I don't get an expected return, but instead the value NaN, which stands for Not a Number. It is your job as the programming to keep track of what types variables are. The compiler won't help you now, because there is no compiling!

Ok, one last thing. Let's talk about arrays. 

Arrays are simply values inside of two square brackets. Unlike in C, you don't have to declare the variable as an array, nor do you have to specify the size of the array. Let's make an array of numbers, like so:

`var arrOne = [0, 1, 2, 3, 4]`

Once again, the return is undefined, but expected. If I type the name of the variable

`arrOne`

The return is the array. You can see the values 0 through 4. The console is also telling us that the current size of the array is 5, and has an arrow. Let's click the arrow.

It looks like it is matching up the array index with the value! Cool!

If I wanted to access one value in the array, I will use the bracket notation to get the first item, at index 0. Just like C, JavaScript arrays are 0-indexed, meaning that the first item starts at index 0.

`arrOne[0]`

It returns 0, just like I would expect. What if I wanted to add a new value to the end of the array? Well, I know that the next index would be index 5, so I'll just assign it using the bracket notation.

`arrOne[5] = 10`

Now if I ask for the array

`arrOne`

I now see 10 at the end of the array. The console is also telling us that the array is now of size 6!

I could also use a method available on arrays to append to the end of an array. That method is the `push` method. I'll just write the name of the array, dot, push, parenthesis, and give it the new value.

`arrOne.push(15)`

It returned the number 7. At first that seems weird, but the value is just telling us the new size of the array. That could be useful in the future.

Now if I ask for the array

`arrOne`

I can see that the number 15 has been added to the end of the array!

What if I ask for an index past the end of the array? In C, two things might happen: either a segfault occurs because you tried to access memory outside of the program's control. Or worse, you might get garbage data. Let's try it in JavaScript

`arrOne[200]`

The return is undefined! No error, and no garbage data! Thanks JavaScript. The return actually makes a lot of sense: the value you asked for hasn't been defined yet, so it is undefined!

Because you don't have to specify type, arrays can also contain a mixture of types. Take that C!

For example:

`var arrTwo = [0, "One", 2, "3", NaN]`

Take that C! The array does not enforce what types can go into it. But once again, you have to be careful. Because you don't know what could be coming, you have to be careful what you do with elements in that array!

Ok! With all of this new knowledge, we can start to leverage JavaScript's real power: DOM manipulation! See you in the next video!