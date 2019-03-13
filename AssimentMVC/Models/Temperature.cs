using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AssimentMVC.Models
{
    public class Temperature
    {
        
        public static string Fahrenheit(double fahrenheit)
        {
            double celsius = (fahrenheit - 32) / 1.8;
            return Celsius(celsius);
        }

        public static string Celsius(double celsius)
        {
            if (celsius >= 38)
            {
                return "You have fever";
            }
            else
            {
                return "You have no fever";
            }

        }
    }
}
