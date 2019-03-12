using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AssimentMVC.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AssimentMVC.Controllers
{
    public class HomeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }

        public IActionResult Projects()
        {
            return View();
        }

        //Fever
        public IActionResult Fever()
        {
            return View();
        }

        public IActionResult Fever(string fah, string cel)
        {
            Temperature temp = new Temperature();

            double numFah = 0;
            double numCel = 0;

            fah = fah.Replace(".", ",");
            cel = cel.Replace(".", ",");

            double.TryParse(fah, out numFah);
            double.TryParse(cel, out numCel);

            ViewBag.CelsiusToFahrenheit = Temperature.CelsiusToFahrenheit(fah);

            return View();
        }
    }
}
