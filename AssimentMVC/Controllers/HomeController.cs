using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AssimentMVC.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AssimentMVC.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            Random rnd = new Random();
            int dice = rnd.Next(1, 100);
            HttpContext.Session.SetString("Test", "Maxx");
            HttpContext.Session.SetInt32("Test", dice);
            return View();
        }

        public IActionResult About()
        {
            ViewBag.Name = HttpContext.Session.GetString("Test");
            ViewBag.Age = HttpContext.Session.GetInt32("Test");
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
                
        public IActionResult Fever()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Fever(string temp)
        {
            double numTemp = 0;

            if (String.IsNullOrEmpty(temp))
            {
                ViewData["Message"] = "Please input value";
                return View();
            }
            else
            {
                temp = temp.Replace(".", ",");
                double.TryParse(temp, out numTemp);
            }

            ViewBag.Result = Temperature.Celsius(numTemp);

            return View();
        }


    }
}
