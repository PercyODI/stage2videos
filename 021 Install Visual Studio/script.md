## Plan
https://dev.to/charanrajgolla/beginners-guide---object-oriented-programming

https://www.youtube.com/watch?v=gfkTfcpWqAY - C# Tutorial For Beginners - Learn C# Basics in 1 Hour

Cool things:
- https://wpuploads.azureedge.net/2016/08/LearnCSharpSimpleRPG_2ndEd.pdf

## QuizBer

A console app based quiz developed by the GrillBer team. 

## Goals: 

1. Learn C#
1. Learn about objects/classes
1. Learn about inheritance (basic inheritance and polymorphism)
1. Learn about Collections (List)
1. Learn about generics (basic generics for collections)
1. Learn about Newtonsoft and File access

## Lecture:

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

Let's try playing the quiz now. Everything looks good, but let's pause on the last question (the Fill in the blank question). The question is right, and it does except the answer, but at the top it says True or False Question! That's not right!

Looking back at our code, we can see that this is because we hard-coded the question type string. Let's move that responsibility to the question object itself.

> Using what you know, move the question type display to be part of the question

Ok! We have a working application that works for both True/False Questions and FillInTheBlank questions! 

A new requirement has come in to support Order questions. This new question type needs to be able to list several things in a random order, and the user has to type the corresponding numbers in order. Yikes!

Eventually, it will look something like this:

```
Order Question

Put the following items in chronological order:

1. The outdoor gas grill was invented
2. George Foreman grill invented
3. Humans discover fire
-----------------------------------------------

>> 3
>> 1
>> 2

That is Correct!
```

> - Let's see how far we can get with what we have! Create the order question type and fill it with as much as you can!
>  - Also, add the sample question to the list of questions in our quiz

So there are a couple of behaviors missing that keep us from doing this order right.

1. The question needs to control how the question is output
1. The question needs to control how answers are collected (in case of the order, multiple inputs are required)

We also need to keep in mind the concept of Separation of Concerns. 

https://en.wikipedia.org/wiki/Separation_of_concerns

In our case, a question should not be concerned with how the display works! That means it should use Console.WriteLine() or Console.ReadLine(). The program class is responsible for and is concerned with the display, but uses the questions to build the display, because it is not concerned with what questions are or how they work.

Here is were I'm starting from.

```cs
public class OrderQuestion : Question
{
    public override string QuestionTypeDisplay { get; } = "Order Question";
    public string[] AnswersInOrder { get; set; }
    public override bool AttemptAnswer(string attemptedAnswer)
    {
        throw new NotImplementedException();
    }
}
```

The order question defines an array that are the answers in the order they should be. Then when I make the class, it looks like this:

```cs
var questionFour = new OrderQuestion()
{
    QuestionString = "Put the following items in chronological order",
    AnswersInOrder = new []
    {
        "Humans discover fire",
        "The outdoor gas grill was invented",
        "George Foreman grill invented"
    }
};
quizQuestions.Add(questionFour);
```

Now I have the question string, and the answers in the required order. But the requirement was to display the answers in a random order.

Let's think about how we can store the answers. Sounds like we need three pieces of information about each answer:

1. The correct order index
2. A random order index
3. The answer itself.

Let's make a new class that is only used by the OrderQuestion: an OrderQuestionAnswer class

```cs
public class OrderQuestion : Question
{
    private class OrderQuestionAnswer
    {
        public int CorrectOrder { get; set; }
        public int RandomOrder { get; set; }
        public string AnswerString { get; set; }
    }
```

This class is currently what we call a property bag: it doesn't have any behavior, but rather just holds a lot of properties that we need to track.

You'll also notice that I have used a different accessability modifier for this class. This time it is private. This means that only the OrderQuestion class can use the OrderQuestionAnswer. This makes sense, since no one else should be using this class.

I'm also going to change the AnswersInOrder property to be a list of OrderQuestionAnswer's

```cs
private List<OrderQuestionAnswer> OrderQuestionAnswers { get; set; } = new List<OrderQuestionAnswer>();
```

You'll notice that we also have to make this property private, because it uses a private class in it. This is fine: No one but the OrderQuestion should be doing anything with this list.

This presents a challenge though: How does the Program class give the OrderQuestion the answers if that property is private?

The answer is through a constructor! A constructor is just a method that defines how to build the object. A Constructor is a public method of the same name as the class itself. So, we could make a constructor as follows:

```cs
public OrderQuestion(List<string> answersInOrder)
{

}
```

Now users can create a list of the answers, and the OrderQuestion will handle all of the randomness and storage!

Then Program class can create a new OrderQuestion like so:

```cs
var questionFour = new OrderQuestion(new string[]
{
    "Humans discover fire",
    "The outdoor gas grill was invented",
    "George Foreman grill invented"
})
{
    QuestionString = "Put the following items in chronological order"
};
quizQuestions.Add(questionFour);
```

So how do we build the OrderQuestionAnswers from the given answersInOrder? Copy this bit of code into the constructor:

```cs
public OrderQuestion(string[] answersInOrder)
{
    var rand = new Random();

    for(var i = 0; i < answersInOrder.Length; i++)
    {
        var newOrderQuestionAnswer = new OrderQuestionAnswer()
        {
            AnswerString = answersInOrder[i],
            CorrectOrder = i + 1,
            RandomOrder = rand.Next()
        };
        OrderQuestionAnswers.Add(newOrderQuestionAnswer);
    }

    OrderQuestionAnswers = OrderQuestionAnswers.OrderBy(oqa => oqa.RandomOrder).ToList();

    for (int i = 0; i < OrderQuestionAnswers.Count(); i++)
    {
        OrderQuestionAnswers[i].RandomOrder = i + 1;
    }
}
```

Let's step through this line by line. First, we make a new Random class. This is the standard Random number generator that comes from .NET.

Then we loop through each answer, making a new OrderQuestionAnswer, setting the answer string and the correctOrder, and then picking a random number as it's random order.

Then we sort the list by that random order.

Then we reset the random order to its new order in the list.

---

If we run the program now, we can set a breakpoint after question four has been created, and look inside it to see the list of answers, in their random orders and their correct orders!

Now that we have list of the possible answers, we need to display them.

Let's add a new method to the OrderQuestion class called `DisplayQuestion`, and have it return an array of strings. 

Why an array? Remember that questions can't care about how to display things, only what to display. We will return all the strings, and let the program class manage displaying them to the console.

First we want to display the question string, an empty line, and then for each OrderQuestionAnswers, build a new list from the random order property and the AnswerString property.

```cs
public List<string> DisplayQuestion()
{
    var retList = new List<string>
    {
        QuestionString,
        string.Empty
    };

    foreach (var orderQuestionAnswer in OrderQuestionAnswers)
    {
        retList.Add($"{orderQuestionAnswer.RandomOrder}. {orderQuestionAnswer.AnswerString}");
    }

    return retList;
}
```

Cool! Much more control of the display. Let's go back to the Program class, and tell it to use the DisplayQuestion method.

I'll try something like this:

```cs
 foreach (var question in quizQuestions)
{
    Console.Clear();
    Console.WriteLine(question.DisplayQuestion());
```

> Why doesn't Visual Studio like the DisplayQuestion method?

DisplayQuestion only exists on the OrderQuestion class, but here in Program class, we only know that is a question, not what kind of question. 

> What would we need to do to make this available at this level?

DisplayQuestion needs to be accessible for all Questions, not just OrderQuestion.

> Make DisplayQuestion work for all question types!

```cs
public abstract class Question
{
    public abstract string QuestionTypeDisplay { get; }
    public string QuestionString { get; set; }
    public abstract bool AttemptAnswer(string attemptedAnswer);

    public virtual List<string> DisplayQuestion()
    {
        return new List<string>()
        {
            QuestionString
        };
    }
}
```

I used a new keyword in the abstract class: virtual. A virtual method is a method with a default behavior, but a child class can override it if they want. This way the regular classes can rely on the default, and only the special classes can define their special behavior.

---

Ok, we're displaying the question correctly now! The next step is handling the answers.

The first step is to give the Program class a way of know how many user inputs it needs to accept. This can simply be a int property on the question class for the Number of Required Answers. Lets add that property to the Question class

```cs
public abstract class Question
{
    public abstract string QuestionTypeDisplay { get; }
    public string QuestionString { get; set; }
    public abstract bool AttemptAnswer(string attemptedAnswer);
    public int NumRequiredAnswers { get; set; } = 1;

    public virtual List<string> DisplayQuestion()
    {
        return new List<string>()
        {
            QuestionString
        };
    }
}
```

You'll see that I am setting a default number on the Question class. Just like the default DisplayQuestion method, I'm setting the default to be one, since most question types only want one answer, but gives the question the ability to override it.

To override it in the OrderQuestion, I'll just set it in the constructor after I've built the OrderQuestionAnswers list.

```cs
NumRequiredAnswers = OrderQuestionAnswers.Count();
```

Back in Program class, we will make a for loop and use a console read line for every required answer.

```cs
for (var i = 0; i < question.NumRequiredAnswers; i++)
{
    Console.Write(">> ");
    var response = Console.ReadLine();
}
```


You'll notice that now the response variable is out of scope after the for loop. We need to expand a few things to allow for an list of answers, instead of assuming there will only be one. Let's make a list, save all the responses to the list, then pass that into the AttemptAnswer method.

```cs
var listOfResponses = new List<string>();
for (var i = 0; i < question.NumRequiredAnswers; i++)
{
    Console.Write(">> ");
    listOfResponses.Add(Console.ReadLine());
}

Console.WriteLine();
if (question.AttemptAnswer(listOfResponses))
{
    Console.WriteLine("That is Correct!");
}
else
{
    Console.WriteLine("Sorry, that is incorrect.");
}
```

Ok, this makes sense, but AttemptAnswer doesn't like it.

> Modify the Question class and children classes to support the list of responses

```cs
public abstract class Question
{
    public abstract string QuestionTypeDisplay { get; }
    public string QuestionString { get; set; }
    public abstract bool AttemptAnswer(List<string> attemptedAnswer);
    public int NumRequiredAnswers { get; set; } = 1;

    public virtual List<string> DisplayQuestion()
    {
        return new List<string>()
        {
            QuestionString
        };
    }
}
```

> This includes making the OrderQuestion return the correct response to AttemptAnswer.

```cs
// OrderQuestion class.
public override bool AttemptAnswer(List<string> attemptedAnswer)
{
    for(var i = 0; i < attemptedAnswer.Count(); i++)
    {
        var orderQuestionAnswer = OrderQuestionAnswers[int.Parse(attemptedAnswer[i]) - 1];
        if (orderQuestionAnswer.CorrectOrder != i + 1)
        {
            return false;
        }
    }

    return true;
}
```

> New Requirement! We want to support a multiple choice question type, where a question is asked, a selection of possible answers are displayed in random order, and the user must select the correct one!

> New Requirement! We want to support multiple choice questions where the user needs to select all the correct answers (0 to all of possible answers).

Homework:
Start reading through this PDF. By no means do you need to read it cover to cover by next week, but take chunks of time to go through it and follow along with the exercises. It will help reinforce some of the concepts we went over today, and give you a different point of view than just mine!

[C# 2019 Refresh](CSharp+Book+2019+Refresh.pdf)