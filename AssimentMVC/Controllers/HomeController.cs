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
                
        public IActionResult Fever()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Fever(string temp)
        {

            double numTemp = 0;
            //string.IsNullOrEmpty(temp)

            temp = temp.Replace(".", ",");

            double.TryParse(temp, out numTemp);

            ViewBag.Result = Temperature.Celsius(numTemp);

            return View();
        }
    }
}
