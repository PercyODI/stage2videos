Hello, and welcome to Stage Two: GitHub Pages. In this video, we will initialize a git repo, commit our code, push it up to GitHub, and enable GitHub Pages on the repo!

Now that we have the start to our application, lets get it up into the world! First, we need to commit our code locally. Luckily we have git and GitHub Desktop already installed and ready to go!

Let's open up GitHub Desktop. From here, we will click File -> Add local repository. This will pop up a new modal asking for the local path to the folder we want to make into a repository. So we will click Choose..., navigate to our directory (Documents -> RealTimeDiary), and click Select Folder. 

Note that we are not selecting a specific file. A repository is like a folder, so instead of selecting a file, we have to select a folder. 

As soon as we click Select Folder, the Add local repository modal is showing us an warning. This is because GitHub Desktop knows there isn't a repository initialized here. The modal asks "Would you like to create a repository here instead?", which we do! Let's click the Create a Repository link it made for us.

We will leave the name as it is, because that is what the application is called! There are a lot of options on this modal, but we don't need to mess with any of them. Go ahead and click "Create Repository".

In GitHub Desktop, we are now looking at our new repository locally. The main pane is showing "No local changes". If we click the history tab on the left pane, we will see one commit with the message "Initial commit", and it tells me that I am the one that committed just now.

Looking to the right, we see two files changed in the commit. The first is a `.gitattributes`. GitHub Desktop auto-generated this file for us, and we can ignore it for now. Right under `.gitattributes` is our `index.html` file. If click on it, we can see the changes we made to it. Unsurprisingly, it is showing all lines as added, since this is the first time .git has been told to track the file.

This repository only exists locally; GitHub does not know about it yet! Let's change that! To push the repository up to GitHub, we will click Repository -> Push. In the modal that pops up, we will make sure GitHub.com is selected because we are not using the Enterprise Server. The name looks correct. Go ahead and uncheck the "Keep this code private". If your modal asks for Organization, make sure to select None. Then click "Publish repository". 

Lets see if we can find our repository on GitHub now! We'll log into our GitHub account. On the left hand side, there is a list of repositories. I have several repositories, so I will have to search for RealTimeDiary, but you will likely only have RealTimeDiary over there! Go ahead and click the link.

There it is! If you click on `index.html`, you will see that it is indeed the file we created!

We want to make this page available for the world to see. Lucky for us, GitHub actually provides basic webhosting for free! Let's go ahead and enable that now.

Back in the RealTimeDiary repo page, click Settings. Scroll down until you see the section called "GitHub Pages". Under Source, we will select "master branch". The page should reload, and we will scroll back down to the GitHub Pages section.

You will now see it say "Your site is ready to be published at ...". You'll also see some new settings in this section, but we aren't going to mess with them. Instead we will click the link!

If you click too fast, you may be met with a 404 page. If that is the case, just give GitHub a minute to update all the things it needs to set up your GitHUb Pages. When it's finished, we will see our HTML page in all its glory! And now the whole world can see it!

Remember when we named our html file `index.html`? Because we did that, we don't have to list index.html in the address bar: GitHub knows that we want to use that file as the first file, and automatically routes us to it. However, if we did want to be specific, we could type it in and get to the same page.

I'm so excited to have this page up and running! 