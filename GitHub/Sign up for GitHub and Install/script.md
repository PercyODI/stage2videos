Hello, and welcome to Stage Two: Creating a GitHub Account. In this video, we will be covering how to sign up for your free GitHub account, as well as talk about some of the features we get from git and GitHub.

Source Control is vital to development. It allows us as developers to track changes and collaborate on source code. What do I mean by source code? Source code is the english we write in notepad or vim or wherever you are comfortable. Source code is the code you wrote when you were learning C in VUCS. These are the dot c files you created. Source code is not the binary that is created when the source code is compiled, such as dot out, an exe, or a dll.

For our source control system, we will be using git and GitHub. git is a distributed source control system that does not technically require a central server, but using GitHub as our central server gives us a lot of power and features.

`[cut to screen capture]`

The first thing you need to do is create a free GitHub account. Just click the "Sign Up" link in the upper right corner and follow the instructions. When it asks what kind of plan you want, select the Free Plan. We do not need the pro plan for our use case!

Once you have signed up, you will be able to reach your GitHub account. This is what shows up when I log in to GitHub.

Let's click on the repositories page. This is where all of your repos live. Let's talk about what a repo is:

Repositories, or repos for short, are kind of like folders. Every project will have its own repo for holding its source code. But repos are so much more than just folders for files.


[https://github.com/facebook/react]

Lets take a look at a popular open source project: React.js, owned by Facebook.

At the top of the page you see all of the files and folders inside of the project. Next to the file name, you will also see the message from the last change made to it, and when that change was made.

Under the list of files, the readme is displayed. Readme's are good for explaining to other what this project is, how to install and use the project, and how others can contribute and help write the code.
The Readme file is just a special type of text file called markdown. GitHub can take the plaintext readme file, and render it into a much more visually useful page.

The next tab is the issues tab. Issues are a way of tracking things to be changed in the project. These can be bugs, installation issues, or feature requests. 

One more tab over is the Pull Requests tab. Pull requests are changes that someone has made, that they want to be merged into the actual code base. Often these pull requests are based off of issues.

Sometimes repos will have a Wiki page, to help with more in-depth documentation, guides, and FAQs. Looks like the React project has decided to put its documentation somewhere else.

`Cut to camera`

Now that you have a GitHub account, I hope you start to use it as part of your developer life. As a developer at Veterans United, I use source control every day, and it has saved us from costly mistakes several times! 

In the next video, you will learn how to create your own repos and start checking code into them!

---

Now that we have a GitHub account, we need to install git and GitHub Desktop onto our machines!

First, we have to install git. Git is the application that actually handles the source control. GitHub is just a central server running git.

Here are the steps to download and install git

- go to git-scm.com
- Click the "Download for windows" on the picture of the monitor
- Once it has finished downloading, run the file
- In the set-up window, just accept all of the defaults and keep clicking next until the button changes to install
- Click install
- When it has finished, uncheck all the boxes and click finished

Here are the steps to download and install GitHub Desktop:

- go to desktop.github.com
- Click the "Download for Windows" button in the middle of the page
- Once it is downloaded, run the file
- When the splash screen appears, click "Sign in to GitHub.com"
- Enter your username and password
- On the next screen, be sure to update the email address to the email address you signed up with

And you are done!

Now that we have GitHub Desktop installed, lets take a look around. Did you know that the calculator that ships with Windows 10 is open source? Lets pull that in and take a look!

First, we have to find the calculator repository on GitHub. Searching is pretty easy with the search bar in the upper left corner of the GitHub page. We'll just search for "Calculator"

Once we see the repo we want, we'll click its link. Above the files on the right should be a green button called clone or download. Click the button, then copy the address from the text box. 

Now that we have the address, go back to GitHub Deskop and click "Clone a repository from the internet". In the window that pops up, paste the address into the URL text box. Feel free to change the local path to a place on your computer you feel comfortable putting code. I usually have a dedicated directory just for my github projects. Then click clone.

What is a clone anyways? A clone is just a copy. You are copying all of the files from GitHub and saving them to a new location. 

Once the clone is finished, you should see a page in big bold letters saying No Local Changes. This makes sense, because we haven't made any changes to the files yet.

Let's take a look at the files. Click Repository -> Show in Explorer.

Here we can see that there are just files in here. Nothing special about them. However there is a .git folder hanging around. This is where git keeps track of all the files and manages them both locally, and provides access to the GitHub remote versions.

Let's open one of the files. Right click on README.md -> Open with -> Choose another app -> scroll down and select Notepad

As you can see, it is just a text file. And we can edit it if we wish! Try putting your name at the top of the file, then saving it. If you go back to GitHub Desktop, you will now see that it is listing the README.md file as changed, and even shows the lines that you added to the file. Pretty cool!

If you click the history tab, you can see all the changes other contributers have made to this repo. Go ahead and look at a few of them. Each change has a message up at the top, and each changed file is listed in the middle, with the line by line changes on the right.

It is also interesting to note how many different people show up in the list! With git and GitHub, it is easy for hundreds of people to be working simulateously on the same project!