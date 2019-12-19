Testing

Resources

- https://medium.com/@sukorenomw/why-tdd-test-driven-development-a1bc983a2cc0
- https://www.programmingwithwolfgang.com/tdd-kata/
- https://medium.com/@marlenac/learning-tdd-with-katas-3f499cb9c492
- https://github.com/testdouble/contributing-tests/wiki/Greeting-Kata

Let's us a Kata to help us think through the process of testing. We will use the Greeting Kata.

The first requirement of the Greeting Kata is this:

> # Requirement 1
> Write a method greet(name) that interpolates name in a simple greeting. For example, when name is "Bob", the method should return a string "Hello, Bob.".

Seems pretty easy! Let's make a new solution with a class library called `GreetingKata`.

Let's make a class called `Greeter`, and give it the method `greet(name)`.

```cs
namespace GreetingKata
{
    public class Greeter
    {
        public string Greet(string name)
        {
            throw new NotImplementedException();
        }
    }
}
```

I bet we can even figure out the implementation of the first requirement pretty quickly.

```cs
namespace GreetingKata
{
    public class Greeter
    {
        public string Greet(string name)
        {
            return "Hello, " + name + ".";
        }
    }
}
```

Pretty easy! So the next question is how do I run this? If I click F5, I'm told that `A project with an Output Type of Class Library cannot be started directly.`

This is because we made a class library. Class libraries contain things like class definitions and utilities, but don't actually create any executable code. To do that, we need something that can execute, like a console app.

Let's right click on the `Solution 'GreetingKata'` -> Add -> New Project -> Console App (.NET Framework) with the name `GreetingKata.Console`

In the Main method, we will create a new Greeter object, and have it greet Bob

```cs
namespace GreetingKata.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            var greeter = new Greeter();
            System.Console.WriteLine(greeter.Greet("Bob"));

            System.Console.ReadLine();
        }
    }
}
```

Caveats:
- You will need to add a reference to `GreetingKata.Console` to `GreetingKata` so that you can make a `Greeter` object
- You will need to set the `GreetingKata.Console` project as the startup project.

Now it's working! If I want to pick a different name, I have to change the code and put it in, but nothing terrible!

Ok, new requirement

> # Requirement 2
> Handle nulls by introducing a stand-in. For example, when name is null, then the method should return the string "Hello, my friend."

Let's go back to the Greeter class, and put in a simple check if the name is null.

```cs
namespace GreetingKata
{
    public class Greeter
    {
        public string Greet(string name)
        {
            if (name == null)
            {
                return "Hello, my friend.";
            }
            return "Hello, " + name + ".";
        }
    }
}
```

Now I have two paths I need to check that they still work. I need to see if Bob still works, so I'll run the console app with Bob, and then I'll change the code to send null and see if that works.

Ok, that's frustrating, but doable. The logic isn't super complex, but it takes me longer. Now another requirement:

> # Requirement 3
> Handle shouting. When name is all uppercase, then the method should shout back to the user. For example, when name is "JERRY" then the method should return the string "HELLO JERRY!"

Ok, so this is just another check after I know the name isn't null.

```cs
namespace GreetingKata
{
    public class Greeter
    {
        public string Greet(string name)
        {
            if (name == null)
            {
                return "Hello, my friend.";
            }

            if (name.ToUpper() == name)
            {
                return "HELLO " + name + "!";
            }
            return "Hello, " + name + ".";
        }
    }
}
```

Once again, not super complex logic, but now I have to go to the console app, and run it a minimum of three times to test every use case:

1. "Bob"
1. null
1. "MARSHALL"

Every requirement I add will increase the number of use cases my application is expected to handle, so checking to see if each use case still works as expected starts to take longer and longer! 

What if someone else works on this code, and they make a change and forget one of the use cases? They may have broken it and no one knows!

This is where tests come in. Tests define all of these use cases so that I don't have to memorize them all. They run automatically! This is faster because I don't have to change the code and re-compile every time, and if someone else works in the code they also have the tests. They can't be forgotten!

Let's make another project, `Unit Test Project (.NET Framework)` called `GreetingKata.Tests`.

Ok, let's right a test method for every use case we have. 

Each test will have the same three steps:

1. Arrange
1. Act
1. Assert

So each one will arrange the setup. Right now the setup is very simple: just create a new `Greeter` object.

Then we will act. In this step we do the action for the use case. In these tests, it is just calling the `Greet` method with the use case.

Then we assert that the string that is returned is the string we expect. Let's build these three use case tests together!

```cs
namespace GreetingKata.Tests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void GivenBob_ReturnsRegularGreeting()
        {
            var sut = new Greeter();

            var expectedGreeting = "Hello, Bob.";
            var actualGreeting = sut.Greet("Bob");

            Assert.AreEqual(expectedGreeting, actualGreeting);
        }

        [TestMethod]
        public void GivenNull_ReturnsMyFriendGreeting()
        {
            var sut = new Greeter();

            var expectedGreeting = "Hello, my friend.";
            var actualGreeting = sut.Greet(null);

            Assert.AreEqual(expectedGreeting, actualGreeting);
        }

        [TestMethod]
        public void GivenMARSHAL_ReturnsAllCapsGreeting()
        {
            var sut = new Greeter();

            var expectedGreeting = "HELLO MARSHALL!";
            var actualGreeting = sut.Greet("MARSHALL");

            Assert.AreEqual(expectedGreeting, actualGreeting);
        }
    }
}
```

Now I don't have to go to the console and check every one every time I make a change!

It also reduces what I call "Mental Acrobatics". These are all the things you are trying to keep in your head, and all the paths you have to think down when making changes to your code. Instead of having to do this all in your head, you can trust the tests instead. Running Tests is cheap, and the more you can move out of your head, the more room you have for looking at bigger picture things!

Now that we have a test suite in place, we can start doing TDD to help with the next requirement:

> # Requirement 4
> Handle two names of input. When name is an array of two names, then both names should be printed. For example, when name is ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."

Let's write the test for this first:

```cs
[TestMethod]
public void GivenTwoNames_ReturnsGreetingForEachName()
{
    var sut = new Greeter();

    var expectedGreeting = "Hello, Jill and Jane.";
    var actualGreeting = sut.Greet(new []{"Jill", "Jane"});

    Assert.AreEqual(expectedGreeting, actualGreeting);
}
```

You can see that it is already complaining because the `Greet` method can't handle arrays. This gives us a big clue as to where to start; we need the `Greet` method to accept an array of strings!

This one is going to force a pretty big refactor, but because we have the previous test cases, we can use them to ensure that after we finish coding this, they will still work!

Note: Overloaded methods! In C#, we can create overloaded methods! An overloaded method is a method with the same name as another method, but has different input parameters!

```cs
namespace GreetingKata
{
    public class Greeter
    {
        public string Greet(string name)
        {
            if (name == null)
            {
                return "Hello, my friend.";
            }

            if (name.ToUpper() == name)
            {
                return "HELLO " + name + "!";
            }
            return "Hello, " + name + ".";
        }

        public string Greet(string[] names)
        {
            return "Hello, " + names[0] + " and " + names[1] + ".";
        }
    }
}
```

This will require the null test to cast null as a string so that it knows which overloaded method to use.

TDD also allows us to focus. Instead of trying to think through the whole problem, I can instead focus only on the problem at hand. If my changes result in breaking previous use cases, the tests will make that apparent!

In this case, I don't have to think about how to handle any number of names. That isn't the requirement. The requirement is simply to handle two names!

Well, until now.

> # Requirement 5
> Handle an arbitrary number of names as input. When name represents more than two names, separate them with commas and close with an Oxford comma and "and". For example, when name is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte."

I want you to try and solve this requirement by first writing the test for it, then implementing a change that will work.

My solution:
```cs
public string Greet(string[] names)
{
    if (names.Length == 2)
    {
        return $"Hello, {names[0]} and {names[1]}.";
    }

    var greeting = "Hello";
    for (int i = 0; i < names.Length; i++)
    {
        greeting += ",";
        if (i == names.Length - 1)
        {
            greeting += " and";
        }

        greeting += " " + names[i];
    }

    greeting += ".";
    return greeting;
}
```

Once you have that, we have another requirement!

> # Requirement 6
> Allow mixing of normal and shouted names by separating the response into two greetings. For example, when name is ["Amy", "BRIAN", "Charlotte"], then the method should return the string "Hello, Amy and Charlotte. AND HELLO BRIAN!"

What would the test look like?

```cs
[TestMethod]
public void GivenMoreThanTwoNames_AndOneIsShouted_ReturnsGreetingForEachName_AndShoutsUppercaseName()
{
    var sut = new Greeter();

    var expectedGreeting = "Hello, Amy and Charlotte. AND HELLO BRIAN!";
    var actualGreeting = sut.Greet(new []{ "Amy", "BRIAN", "Charlotte" });

    Assert.AreEqual(expectedGreeting, actualGreeting);
}
```

Now make the test pass!

My Solution:

```cs
public string Greet(string[] names)
{
    // Split into two lists based on shouting
    var regularNames = new List<string>();
    var shoutedNames = new List<string>();
    foreach (var name in names)
    {
        if (name.ToUpper() == name)
        {
            shoutedNames.Add(name);
        }
        else
        {
            regularNames.Add(name);
        }
    }

    string greeting = "";

    // Build the regular string first
    if (regularNames.Count() == 2)
    {
        greeting += $"Hello, {regularNames[0]} and {regularNames[1]}";
    }
    else
    {
        greeting = "Hello";
        for (int i = 0; i < regularNames.Count(); i++)
        {
            greeting += ",";
            if (i == regularNames.Count() - 1)
            {
                greeting += " and";
            }

            greeting += " " + regularNames[i];
        }
    }

    greeting += ".";

    // Then build the shouting string if any
    if (shoutedNames.Any())
    {
        if (shoutedNames.Count() == 1)
        {
            greeting += $" AND HELLO {shoutedNames[0]}";
        }
        else if (shoutedNames.Count() == 2)
        {
            greeting += $" AND HELLO {shoutedNames[0]} AND {shoutedNames[1]}";
        }
        else
        {
            greeting += " AND HELLO";
            for (int i = 0; i < shoutedNames.Count(); i++)
            {
                greeting += ",";
                if (i == shoutedNames.Count() - 1)
                {
                    greeting += " AND";
                }

                greeting += " " + shoutedNames[i];
            }
        }

        greeting += "!";
    }
    return greeting;
}
```

What test cases do you see? Now that we have lots of possible code paths, we should write tests and ensure that each one still works as expected! Take turns writing new test cases and then implementing the changes! 

1. What if there is only 1 regular name?
1. What if there are more than two regular names?
1. What if there are more then one shouting name?
1. What if there are more than two shouting names?
1. What if there are only shouting names?
1. What if one of the names is `null`?
1. What if multiple names are null?
1. What if there are no names?

Very quickly we can see that there is not a one-to-one match of requirements to tests. One requirement might spawn tens of tests! We have applications on my team with hundreds of tests! 

Testing has the concept of code coverage. The goal is to have 100% code coverage, meaning that every single possible path and permutation of paths is tested. 

For the record, 100% code coverage is often not possible, especially in bigger projects or projects that rely heavily on state and external applications. But we try to get as close as we can!

Ok, one last requirement. I want you to take turns writing new tests and implementing them until we have a well covered test suite!

> # Requirement 7
> If any entries in name are a string containing a comma, split it as its own input. For example, when name is ["Bob", "Charlie, Dianne"], then the method should return the string "Hello, Bob, Charlie, and Dianne.".

Note: Private methods aren't directly called by tests. They are used by public methods to help make logical sense of the cases and reduce the complexity of the higher level methods. Feel free to make any private methods you want, and don't feel like you have to test them directly!

Test ideas:
1. What if there are two regular names in one string?
1. What if there are more than two regular names in one string?
1. What if there are two string each containing two regular names?
1. What if there are more than two regular names in one string?
1. What if there are two shouting names in one string?
1. What if there are more than two shouting names in one string?
1. What if there are two strings each containing two shouting names?
1. What if there are more than two shouting names in one string?
1. What if there is a mixture of regular and shouting names in one string?

Once we complete the Greeting Kata, return to the Bowling Kata and finish it up with your knew found testing capabilities!