Hello, and welcome to Stage Two: Installing GitHub Desktop. In this video, we will be covering how to sign up for your free GitHub account, as well as talk about some of the features we get from git and GitHub. 

In the last video, we created a GitHub account for us to store our code in repositories. In this video, we will download the official GitHub application and install it on our machines. While this video is geared towards a windows installation, the process is very similar on other systems such as linux or Mac.

`Cut to screen recording`

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