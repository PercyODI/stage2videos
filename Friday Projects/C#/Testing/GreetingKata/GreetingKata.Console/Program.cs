using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GreetingKata.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            var greeter = new Greeter();
            System.Console.WriteLine(greeter.Greet("bob"));

            System.Console.ReadLine();
        }
    }
}
