`Scene`

VS Code open on the left side of screen. Open to the Welcome screen.

Chrome open on the right side of screen, open to the new tab screen. 

`Script`

Hello, and welcome to Stage Two: First Look at HTML. In this video, we will be talking about HTML and what it can do for our application.

HTML is the standard markup language for the web. It is important to know that HTML is NOT a programing language: as a markup language it tells the browser how to structure and render the page for the user. HTML documents consist of elements that define the structure of a page, such as paragraphs, headers, tables, etc. 

Most HTML elements consist of three parts
1. The Opening tag
2. The Content
3. The Closing tag

All tags start with a left angle bracket, and end with a right angle bracket.

Lets create a page for my app, RealTimeDiary! I'm going to create a new folder by clicking `File` -> `Open Folder...`. I'm going to click `Documents` on the `Quick access` bar, then create a New Folder by clicking New Folder, and calling this new folder `RealTimeDiary`. Then I'll click `Select Folder` to have that folder open in VS Code.

Every HTML file ends with the extension HTML. I'm going to right click on the empty box on the left, select `New file`, and name the new file `index.html`. It is the convention that the first page a user sees is called index.html. We will use this convention becuase it will make our lives easier in the future!

Now that I have the index.html page, I need create a header so people know what page they are on. For this, I want to use the biggest header possible, the h1 tag! To start writing the HTML, I'm going to click into the text area on the right side of VS Code.

First I need a left angle bracket, the characters h1, and a right angle bracket. You'll notice that VS Code is smart, and already created a closing tag for me. I know it is a closing tag because it has a left angle bracket, a forward slash, the characters h1, and a right angle bracket. Now for the text that I want as my header, `Welcome to RealTimeDairy` (misspelled on purpose). VS Code already has my cursor where it needs to be: between the opening and closing tags. I'll just type my header in the middle.

The closing bracket has the same name as the opening bracket, but starts with the forward slash to tell the browser that I am done with this element. It is important that you have a closing tag for every opening tag you use!

Now I want to test this out. I'm going to save the file by using the shortcut Ctrl-S. Then I'm going to drag and drop the html file onto Chrome. Now I can see exactly what I typed! 

Ooops! I accidentally typed Real Time Dairy! That's ok: all I need to do to fix it is change the text. I'll go back to VS Code and fix the text so it reads Real Time Diary. Ctrl-S to save the file. 

I saved the file, but Chrome is still showing the wrong text! This is because the browser doesn't know to re-render the page when the file is saved. All I need to do is refresh the page, and it will show the corrected text. There we go!

Now that we have a working HTML file, in the next videos we will start filling it with content!