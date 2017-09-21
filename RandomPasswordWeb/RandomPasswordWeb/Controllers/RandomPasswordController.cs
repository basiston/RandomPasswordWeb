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