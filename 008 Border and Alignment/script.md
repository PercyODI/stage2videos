Hello, and welcome to Stage Two: Borders and Alignment. In this video, we are going to expand our CSS toolkit to do borders and text-alignment.

We left off with our very blue page. I really like the header of the page, but I think it would look better in the center of the page. Lets look back at our h1 rule in our style element.

Let's add another rule. After the background-color rule, I'll create a new rule. The property will be text-align, and a value of center. Save the file and refresh. Wow! That looks so much better!

Now lets look at the paragraph at the top. I'd like it fill all the space from the left and the right. Like a newspaper. That's easy too!

Let's make a new rule set, using p as the selector. Inside the curly braces, I'll use the text-align property again, but with the value of justify. There! It's subtle, but really fills the space.

Now lets work on the table! 

The first thing I want to fix with the table is add some borders. It's too open for my taste. Let's make a new rule in our style element.

Let's use table as the selector. The property we want to set is the border property. The value consists of three parts: the size, the style, and the color. Let's use the value "1px solid black". That means the border will be 1px thick, solid style, and the color black. Let's save the file and refresh. 

Well, it's a step, but I want the cells of the table to have a border too. To do this, we will add more tags to the selector. 

After the table selector, lets add a comma, then td. This means to apply the rules to both table elements and td elements. Refresh, and now all of the cells have a border! That's what I wanted, but there are these weird spaces between the cells. I really wish that I could collapse all of the table borders into a solid border.

Turns out, border-collapse is a rule property! I only want to apply this rule to the table element, so I will click after the table comma td rule-set, enter, and create another rule-set using table as a selector.

You may be asking if you are allowed to use table in two different selectors, and the answer is yes! CSS will go from top to bottom, and apply the given rule-sets to each element that matches the selector. So in this case, table will be given a border in one rule-set, and then given the border-collapse property in the next rule-set.

Let's save the file, refresh chrome, and wow! That border-collapse made a huge difference!

Ok, now I really want to border the whole page, and give it a strong presence! Since the body contains all the rendered elements, I'll click into the body rule-set, after the color property declaration, enter, and type border. Now for the value. Let's make it extra thick, 10 px should do the trick! To really make it stand out, I want to use the ridge style, and color it light salmon. Let's save, and refresh. Now that is a border! I feel like it really brings the page together!

Now that we have borders and alignments, lets see if we can adjust some sizes and positions in the next video!