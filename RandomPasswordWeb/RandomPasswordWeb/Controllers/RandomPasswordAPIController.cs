using System;
using System.Text;
using System.Web.Http;

namespace RandomPasswordWeb.Controllers
{
    public class RandomPasswordApiController : ApiController
    {
        private string UpperCaseCharacters { get; } = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        private string LowerCaseCharacters { get; } = "abcdefghijklmnopqrstuvwxyz";

        private string Numbers { get; } = "0123456789";

        private string SpecialCharacters { get; } = "!#@$%";


        /// <summary>
        /// A method that returns random number based user requirement
        /// </summary>
        /// <param name="includeUpperCase">include uppercase characters</param>
        /// <param name="includeLowerCase">include lowercase characters</param>
        /// <param name="includeNumbers">include numbers</param>
        /// <param name="includeSpecialChars">include special characters</param>
        /// <param name="stringlength">password length</param>
        /// <returns>random string</returns>

        [HttpGet]

        [Route("api/RandomPasswordApi/RandomPassword")]
        public IHttpActionResult Get(bool includeUpperCase, bool includeLowerCase, bool includeNumbers, bool includeSpecialChars,
            int stringlength = 4)
        {
            if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialChars)
            {
                NotFound();
            }
            var masterstring = new StringBuilder();

            if (includeUpperCase)
                masterstring.Append(UpperCaseCharacters);
            if (includeLowerCase)
                masterstring.Append(LowerCaseCharacters);
            if (includeNumbers)
                masterstring.Append(Numbers);
            if (includeSpecialChars)
                masterstring.Append(SpecialCharacters);

            var stringsChars = new char[stringlength];
            var random = new Random();
            for (var i = 0; i < stringsChars.Length; i++)
                stringsChars[i] = masterstring[random.Next(masterstring.Length)];
            var finalstring = new string(stringsChars);
            return Ok(finalstring);
        }


    }
}