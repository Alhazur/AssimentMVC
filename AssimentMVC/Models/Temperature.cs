using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AssimentMVC.Models
{
    public class Temperature
    {
        public static double CelsiusToFahrenheit(string celsiusTepm)
        {
            double celsius = double.Parse(celsiusTepm);
            double fahrenheit = (celsius * 9 / 5) + 32;
            return fahrenheit;            
        }

        public static double FahrenheitToCelsius(string fahrenheitTepm)
        {
            double fahrenheit = double.Parse(fahrenheitTepm);
            double celsius = (fahrenheit - 32) * 5 / 9;
            return celsius;
        }
    }
}
