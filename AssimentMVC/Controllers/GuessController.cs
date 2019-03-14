using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AssimentMVC.Controllers
{
    public class GuessController : Controller
    {
        public const string SessionKeyName = "RandomNumer";
        public const string SessionKeyAge = "_Age";

        [HttpGet]
        public IActionResult Index()
        {

            if (string.IsNullOrEmpty(HttpContext.Session.GetString(SessionKeyName)))
            {
                HttpContext.Session.SetString(SessionKeyName, "The Doctor");
                HttpContext.Session.SetInt32(SessionKeyAge, 773);
            }

            return View();
        }

        [HttpPost]
        public IActionResult Index(int geussNumber)
        {
            var name = HttpContext.Session.GetString(SessionKeyName);
            var age = HttpContext.Session.GetInt32(SessionKeyAge);
        }
    }
}