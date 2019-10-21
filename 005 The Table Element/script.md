`scene`

An empty Google Sheets window open full screen.

`script`

Hello, and welcome to Stage Two: The Table Element. In this video we are going to look at a more complex HTML element, the table! Tables are like Excel or Google Sheets documents.

I want my users to be able to see a list of posts they can view, with the dates and user that wrote them in a table. On the top, I want some header text that says Entry, Date, and User. I also want these to be bold so users know they are headers!

I'm going to make some fake data to help me design my pages. For example:

|Entry|Date|User|
|---|---|---|
|My first Entry|10/20/2019|Pearse
|Why are Rabbits so CUTE?!|10/20/2019|Laura
|Pokemon is the best game, a dissertation|10/21/2019|Garrett

In Google Sheets, even when the text is very different sizes like the Entry column, all the data stays in line with the header and other data in the column! Fortunately I can do all of this in an HTML table.

> Move chrome window to right side of screen.

To create a table, we simply need to create a table element. We'll type left angle bracket, the word table, and a right angle bracket. Once again VS Code will auto-create the table closing tag. This time, however, we will hit enter.

As you can see, VS Code has put the opening tag on one line, moved my cursor to the next line and indented, and put the closing tag on the last line. This is different from when we nested the strong element inside the p element: because the strong element is an in-line element.

The next thing we need is the head. The table head element is called thead, so we will write left angle bracket, the word thead, and a right angle bracket, then enter.

Once again we have the new tags above and below our cursor which is indented yet again! Now we need the row that makes up the head, which happens to be called tr, for table row. We will write left angle bracket, the characters tr, and a right angle bracket, then enter.

Now it's time for some data. The table data element is called td, for table data. We will write left angle bracket, the characters td, and a right angle bracket. We won't hit enter, because this is where our content goes!

The first column header says Entry, so we will type that into the td.

Lets save the HTML file, and load it up in Chrome. 

> Open index.html in Chrome

It is displaying Entry! Now lets add the other two column headers!

> Open the Google Sheet

The other two column headers are in the same row, so we don't need another tr element. We just need two more td elements. So I'll click after the first td element, hit enter, then fill out the other two td elements.

Lets save the HTML file, and load it up in Chrome. 

> Open index.html in Chrome

Perfect! They are displayed now as well! Now for the actual data!

> Open the Google Sheet

The actual data isn't a part of the head, but instead is part of the body. So I will click after the closing thead tag, hit enter, then use the tbody element by typing left angle bracket, tbody, right angle bracket, followed by enter.

Notice that the tbody and thead elements are indented the same amount! This is because they are next to each other, not nested inside one another. 

Now that I am inside the tbody element, I will create a tr element to represent the first row. And inside the tr, I will have three td elements.

First, the td element, with the content being My First Entry.
Then another td element with the content 10/20/2019.
And finally third td element with the content Pearse.

See how the tbody uses the same number of td elements as the head. That how the browser knows to line them up. Lets save the page and see what it looks like!

> Open index.html in Chrome

Looking good! See how the words Entry, Date, and User are now spaced out so they fit with the data! All without any extra work on our part: the table handled all that formatting for us!

Lets keep going. I want to add the other two rows of data.

> Open the Google Sheet

After the closing tr tag inside the tbody, I want to hit enter and create another tr element. Each tr represents a whole row of data.

Inside this new tr, I'm going to create three td elements, with the data from the second row!

And then a third tr, with three td elements inside of it, containing the data from the last row! Lets save the file and refresh chrome!

Once again the table changed to fit all the data, and keeps all of the columns in line!

One thing is bugging me, though. In the Google Sheet, the head text was bold so it was clear that it was the head. How can we do the same thing in HTML? The strong element of course!

I'm going to click between the opening td tag and the word Entry. Then I'm going to write the strong opening tag, ctrl-z to undo the closing tag so I can write it myself after the word Entry. Hit save and refresh.

Hey, that's exactly what I wanted. Now I need to do the same thing with the other head data!

Perfect! My RealTimeDiary app is really coming together! I can't wait to get it out into the world!