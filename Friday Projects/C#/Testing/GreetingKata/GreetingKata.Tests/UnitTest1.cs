using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

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
            var actualGreeting = sut.Greet((string) null);

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

        [TestMethod]
        public void GivenTwoNames_ReturnsGreetingForEachName()
        {
            var sut = new Greeter();

            var expectedGreeting = "Hello, Jill and Jane.";
            var actualGreeting = sut.Greet(new []{"Jill", "Jane"});

            Assert.AreEqual(expectedGreeting, actualGreeting);
        }

        [TestMethod]
        public void GivenMoreThanTwoNames_ReturnsGreetingForEachName()
        {
            var sut = new Greeter();

            var expectedGreeting = "Hello, Amy, Brian, and Charlotte.";
            var actualGreeting = sut.Greet(new []{ "Amy", "Brian", "Charlotte" });

            Assert.AreEqual(expectedGreeting, actualGreeting);
        }

        [TestMethod]
        public void GivenMoreThanTwoNames_AndOneIsShouted_ReturnsGreetingForEachName_AndShoutsUppercaseName()
        {
            var sut = new Greeter();

            var expectedGreeting = "Hello, Amy and Charlotte. AND HELLO BRIAN!";
            var actualGreeting = sut.Greet(new []{ "Amy", "BRIAN", "Charlotte" });

            Assert.AreEqual(expectedGreeting, actualGreeting);
        }
    }
}
