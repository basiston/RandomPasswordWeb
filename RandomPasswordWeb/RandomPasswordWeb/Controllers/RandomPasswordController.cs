using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RandomPasswordWeb.Controllers
{
    public class RandomPasswordController : Controller
    {
        // GET: RandomPassword
        public ActionResult Index()
        {
            return View();
        }
    }
}