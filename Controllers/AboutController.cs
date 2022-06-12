using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EGovProject.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult Brief()
        {
            return View();
        }
        public IActionResult BriefEnglish()
        {
            return View();
        }
        public IActionResult Map()
        {
            return View();
        }
        public IActionResult Places()
        {
            return View();
        }
    }
}
