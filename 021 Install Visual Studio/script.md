## Plan
https://dev.to/charanrajgolla/beginners-guide---object-oriented-programming

https://www.youtube.com/watch?v=gfkTfcpWqAY - C# Tutorial For Beginners - Learn C# Basics in 1 Hour

Cool things:
- https://wpuploads.azureedge.net/2016/08/LearnCSharpSimpleRPG_2ndEd.pdf

Hey @channel!

I hope everyone had a great Thanksgiving! I wanted to drop three things for you all! At a bare minimum, you will need to install Visual Studio 2017 before next Friday (unless you want to sit and watch 7 gigs download on the WiFi during class)

1. I hope everyone is still working on the ToDo app, and honing your JavaScript and jQuery skills!
2. You need to install Visual Studio 2017 (See instructions below)
  - If you have any issues installing VS 2017, please reach out to me ASAP so we can get it working!
3. Watch this intro video to C# from Mosh: https://www.youtube.com/watch?v=gfkTfcpWqAY
  - This is an hour long video, but is multiple lessons all compiled into one video.
  - Feel free to split this video up over the week!

## Installing Visual Studio 2017
We will be using Visual Studio 2017 to learn and build C# applications. There is a 2019 version out there, but it is more unstable, where 2017 has a much stronger track record. 

Steps:
- Go to think link: https://my.visualstudio.com/Downloads?q=visual%20studio%202017&wt.mc_id=o~msft~vscom~older-downloads
- Click "Sign in with GitHub"
- Sign in with your GitHub credentials
- Click the green "Authorize Microsoft-corp" button
- Click the checkbox on the left for "Visual Studio 2017 (version 15.9)
- Find the text "Visual Studio Community 2017 (Version 15.9)", and click Download
- Run the exe file 
- Click Continue
- This will install the installer (You have to install the installer and use the installer to install Visual Studio)
- After the installer is installed, you should be brought to a page with Workloads to install. Check the following workloads:
  - .NET desktop development
  - ASP.NET and web development
  - .NET Core cross-platform development
- You will notice that you will need to download a lot! When I tried this, I had to download 7.78 Gigabytes.
- Click install, and wait


QuizBer

A console app based quiz developed by the GrillBer team. 

Goals: 

1. Learn C#
1. Learn about objects/classes
1. Learn about inheritance (basic inheritance and polymorphism)
1. Learn about Collections (List)
1. Learn about generics (basic generics for collections)
1. Learn about Newtonsoft and File access

Lecture:

1. Create Console App
1. Display quiz title
1. Display a question

```cs
static void Main(string[] args)
{
    Console.WriteLine("Welcome to QuizBer!");
    Console.WriteLine();
    Console.WriteLine("Running 'Basic Grill Quiz'");
    Console.WriteLine();
    Console.WriteLine("Press Enter to start the quiz!");
    Console.ReadLine();
    Console.Clear();
    Console.WriteLine("True or False Question");
    Console.WriteLine();
    Console.WriteLine("A smoker is a type of grill.");
    Console.WriteLine("--------------------");
    Console.WriteLine();
    Console.Write(">> ");
    var response = Console.ReadLine();

    Console.WriteLine();
    if (response.ToLower() == "true")
    {
        Console.WriteLine("That is Correct!");
    }
    else
    {
        Console.WriteLine("Sorry, that is incorrect.");
    }

}
```

Ok, so we have a series of console writes that give us some basic user interaction. Now I want to write a second question. In this same format, it would look like this:

```cs
static void Main(string[] args)
{
    Console.WriteLine("Welcome to QuizBer!");
    Console.WriteLine();
    Console.WriteLine("Running 'Basic Grill Quiz'");
    Console.WriteLine();
    Console.WriteLine("Press Enter to start the quiz!");
    Console.ReadLine();
    Console.Clear();
    Console.WriteLine("True or False Question");
    Console.WriteLine();
    Console.WriteLine("A smoker is a type of grill.");
    Console.WriteLine("--------------------");
    Console.WriteLine();
    Console.Write(">> ");
    var responseOne = Console.ReadLine();

    Console.WriteLine();
    if (responseOne.ToLower() == "true")
    {
        Console.WriteLine("That is Correct!");
    }
    else
    {
        Console.WriteLine("Sorry, that is incorrect.");
    }

    Console.WriteLine();
    Console.WriteLine("Press enter to continue...");
    Console.ReadLine();
    Console.Clear();
    Console.WriteLine("True or False Question");
    Console.WriteLine();
    Console.WriteLine("The most popular utensil among grill owners is a long-handled spatula.");
    Console.WriteLine("--------------------");
    Console.WriteLine();
    Console.Write(">> ");
    var responseTwo = Console.ReadLine();

    Console.WriteLine();
    if (responseTwo.ToLower() == "false")
    {
        Console.WriteLine("That is Correct!");
    }
    else
    {
        Console.WriteLine("Sorry, that is incorrect.");
    }
}
}
```

One of the principals of programming is the DRY principal, which stands for "Don't Repeat Yourself". As you can see, we have started to repeat the same things, and even more repetition would be needed for more and more questions. In C, you might have solved this repetition with functions, but in C# and OOP languages, we can use classes and abstraction to solve this problem. 

In this case, we have a pattern that our questions seem to follow: They all have the following properties on them:
    - A Question
    - The correct answer
Also, we can see that they have a very similar behavior for deciding whether the answer is correct or not. 

So, let's write a blueprint for our questions. In C#, we can think of `class`es as blueprints. I'm going to create a new file, and define a new class. I want to set some known properties on all questions.

```cs
public class Question
{
    public bool CorrectAnswer { get; set; }
    public string QuestionString { get; set; }
}
```

That was easy! Let's go back to Main, and make a list of questions that we can loop through. In C#, we have collections, which make this super easy! To make a new object, we simply use the new keyword, and the name of the class we want to use as the blueprint. Collections are special, because not only do you have to declare what the name of the class you want to use, but also the name of the class type that it will contain.

After that, we will create some Question objects and give them their values.

Then, we simply loop over each question in the list, display it, check the answer, print the result, then go to the next question!

```cs
static void Main(string[] args)
{
    var quizQuestions = new List<Question>();
    var questionOne = new Question()
    {
        QuestionString = "A smoker is a type of grill.",
        CorrectAnswer = true
    };
    quizQuestions.Add(questionOne);

    var questionTwo = new Question()
    {
        QuestionString = "The most popular utensil among grill owners is a long-handled spatula.",
        CorrectAnswer = false
    };
    quizQuestions.Add(questionTwo);

    Console.WriteLine("Welcome to QuizBer!");
    Console.WriteLine();
    Console.WriteLine("Running 'Basic Grill Quiz'");
    Console.WriteLine();
    Console.WriteLine("Press Enter to start the quiz!");
    Console.ReadLine();

    foreach (var question in quizQuestions)
    {
        Console.Clear();
        Console.WriteLine("True or False Question");
        Console.WriteLine();
        Console.WriteLine(question.QuestionString);
        Console.WriteLine("--------------------");
        Console.WriteLine();
        Console.Write(">> ");
        var response = Console.ReadLine();

        Console.WriteLine();
        if (question.CorrectAnswer.ToString().ToLower() == response.ToLower())
        {
            Console.WriteLine("That is Correct!");
        }
        else
        {
            Console.WriteLine("Sorry, that is incorrect.");
        }

        Console.WriteLine();
        Console.WriteLine("Press enter to continue...");
        Console.ReadLine();
    }
}
```

Ok, we can already see how the class is simplifying things for us. But a new quiz question has been requested:

Fill in the blank: "In 2009, competitive eating champion Joey Chestnut ate __ hot dogs with buns in 10 minutes!". The correct answer should be 68.

It still has the basic form of a question, but doesn't fit with our current setup. Currently we only support true/false questions. Once again, OOP comes to the rescue.

Using inheritance, we can make more specific types of questions, while letting them inherit all the things all questions have.

Step one: let's convert our Question class into an abstract class. This says that it defines some of the blueprints, but you have to be more specific about what kind of blueprint to make if you're going to make a new one. 

Under the question class, let's make a new class called TrueFalseQuestion, and make it inherit from Question.

Ok, let's pull the CorrectAnswer property from the Question Class to the TrueFalseQuestion class. Now for one more class: the FillInTheBlankQuestion.

```cs
public abstract class Question
{
    public string QuestionString { get; set; }
}

public class TrueFalseQuestion : Question
{
    public bool CorrectAnswerBool { get; set; }
}

public class FillInTheBlankQuestion : Question
{
    public string CorrectAnswerString { get; set; }
}
```

Now we have two question types: the TrueFalseQuestion and the FillInTheBlankQuestion. Both question types also have a QuestionString, because they inherit that from the Question abstract class. Let's go back to Program.cs, and work out all the red lines.

The questions we made at the top are easy to fix. We just have to change some of the wording to match the new blueprints.

But we have a problem down in the for loop: a Question no longer is guaranteed to have a "CorrectAnswer" property. This is because the CorrectAnswer could be a bool or a string. Instead of trying to force that property to work for both, let's define a behavior that all questions should have. Given an answer, a question should be able to say whether that answer is correct or not.

```cs
public abstract class Question
{
    public string QuestionString { get; set; }
    public abstract bool AttemptAnswer(string attemptedAnswer);
}
```

Once we do that, the other classes are now red, because they don't define that method. 

```cs
public class TrueFalseQuestion : Question
{
    public bool CorrectAnswerBool { get; set; }
    public override bool AttemptAnswer(string attemptedAnswer)
    {
        throw new NotImplementedException();
    }
}

public class FillInTheBlankQuestion : Question
{
    public string CorrectAnswerString { get; set; }
    public override bool AttemptAnswer(string attemptedAnswer)
    {
        throw new NotImplementedException();
    }
}
```

We'll leave them as not implemented, until we can implement them. But first, back in Main.

```cs
foreach (var question in quizQuestions)
{
    Console.Clear();
    Console.WriteLine("True or False Question");
    Console.WriteLine();
    Console.WriteLine(question.QuestionString);
    Console.WriteLine("--------------------");
    Console.WriteLine();
    Console.Write(">> ");
    var response = Console.ReadLine();

    Console.WriteLine();
    if (question.AttemptAnswer(response))
    {
        Console.WriteLine("That is Correct!");
    }
    else
    {
        Console.WriteLine("Sorry, that is incorrect.");
    }

    Console.WriteLine();
    Console.WriteLine("Press enter to continue...");
    Console.ReadLine();
}
```

We have moved the responsibility of deciding whether the question was answered correctly into the question itself, which is cool because who else would know better?!

Ok, let's figure out how to implement the TrueFalseQuestion.AttemptAnswer()

```cs
public class TrueFalseQuestion : Question
{
    public bool CorrectAnswerBool { get; set; }
    public override bool AttemptAnswer(string attemptedAnswer)
    {
        if (CorrectAnswerBool.ToString().ToLower() == attemptedAnswer.ToLower())
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
```

There we go! It is simple, and works! Now let's add the FillInTheBlankQuestion

```cs
var questionThree = new FillInTheBlankQuestion()
{
    QuestionString = "In 2009, competitive eating champion Joey Chestnut ate __ hot dogs with buns in 10 minutes!",
    CorrectAnswerString = "68"
};
quizQuestions.Add(questionThree);
```

Easy enough, but now if we try and run it, it fails on the third question. That makes sense because it left it NotImplemented. Let's try this:

```cs
public class FillInTheBlankQuestion : Question
{
    public string CorrectAnswerString { get; set; }
    public override bool AttemptAnswer(string attemptedAnswer)
    {
        if (attemptedAnswer == CorrectAnswerString)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
```