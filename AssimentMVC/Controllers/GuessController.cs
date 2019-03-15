using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AssimentMVC.Controllers
{
    public class GuessController : Controller
    {
        public int Id { get; set; }

        public IActionResult Index()
        {
            Random rnd = new Random();

            int dice = rnd.Next(1, 100);

            HttpContext.Session.SetInt32("rand", dice);
            return View();
        }

        [HttpPost]
        public IActionResult Index(int geussNumber)
        {

            int? rand = HttpContext.Session.GetInt32("rand");
            if (geussNumber < rand)
            {
                ViewData["Message"] = "too low";
            }
            else if (geussNumber > rand)
            {
                ViewData["Message"] = "too high";
            }
            else
            {
                ViewData["Message"] = "Congratulations you guessed right number";

            }
            return View();
        }
    }
}
