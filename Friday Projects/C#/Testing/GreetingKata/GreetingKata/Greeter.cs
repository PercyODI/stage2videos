using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
    }
}
