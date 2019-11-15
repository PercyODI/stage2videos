## Week Three

Dear *\<INSERT NAME HERE>*,

Everyone at the head office is just so pleased with all the work on GrillBer. They recently told shareholders that GrillBer is the `Big Data Silicon Valley Apple Block-Chain` of the Grill-based Technology ecosystem. No pressure.

You are making great headway, but there is still so much to do! Marketing is out doing market research analysis, HR is ramping up the recruiting process, and R&D is, well, frankly they do what they want.

There is so much that we can't keep track of it all! Good thing we have a crack team of developer geniuses at the GrillBer branch. We've tasked them with putting together a To-Do application for us to use and keep track of everything. You can expect to see something come out of there soon!

Oh, right. You are the GrillBer branch. Well, you better get started on that To-Do application. A lot of people are depending on it. And don't forget that trademark GrillTec flair!

---

## Step One

Be sure you have watched all the JavaScript videos!

> [012 First Look at JavaScript](https://youtu.be/D2JFKmSmlFs)

> [013 Changing the HTML](https://youtu.be/MmqItfpWndw)

> [014 The Script Element](https://youtu.be/bnumb0lOeuY)

> [015 Making Decisions](https://youtu.be/laE_N1EjMpk)

> [016 JSON](https://youtu.be/C7OhIfRBq_o)

---

## Step Two

There are a lot of things happening at GrillBer, and your work is really pushing us over and above our expectations! In fact, there is so much we want to do that we need a page that we can keep all of our to-dos!

We would like you to build a to-do app in HTML, CSS, and JavaScript! It needs to do the following things:

1. Allow users to input a new to-do item
1. Allow users to remove a completed to-do item
1. Show a list of items in the order they were input
1. Under the list of items left to do, completed items should be shown in the order they were completed
    - Make it clear they are completed, such as a strike-through or red!
1. Make it look good!
    - Make good color choices
    - Soften the corners so things aren't too sharp
1. Make it feel interactive! 
    - items should change when you hover over them!
1. Give it a GrillTec inspired name. Marketing is out doing research and aren't available to name this product!
1. Make sure the application is up and running on GitHub Pages!

---

## Step Three

Ok, with the To-Do application out of the way, we can return our focus back to GrillBer!

### Requirements

1. Add a section where users can put in new grills, and add them to the table
    - If the user doesn't give all the required data, feel free to `alert` them!
    - Validate the user input. If it doesn't make sense (like a string instead of a number, or a value more than 5 stars), feel free to `alert` them, but don't put garbage data in the table!
    - When a users successfully inputs a new grill, add it to the table, and clear out the input section so the user can input another grill!
1. Dynamically load table from given external resource
    - Ratings should be in stars. Use a picture and dynamically load the correct number of them!
    - Use this external resource: https://stage2cohort2blob.blob.core.windows.net/grillber/data_01.js
1. The FAQ should only show the questions on page load. When a user clicks on a question, the answer should appear under it.
1. Calculate total estimated cost for a grill
    - Users should be able to select a grill by clicking it
    - Open up a calculator (Under the table, or a new div absolutely positioned on top of the main site)
    - Automatically fill in details about the grill (Grill model and brand, cost per hour, delivery cost)
    - Allow user to input expected rental time in hours
    - Display the estimated cost ((cost per hour * number of hours) + delivery fee) * 8.97% taxes
    - Be sure to display using currency (dollar sign, and round up to two decimal places)
    - Something like this? [NerdWallet Tip Calculator](https://www.nerdwallet.com/blog/finance/tip-calculator/)

### Extra Credit
1. The table of grills should be sortable
    - When a user clicks on the column header, the table should be redisplayed sorted by that column (alpha, numeric, whatever makes sense for the column)