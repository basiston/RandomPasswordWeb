using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
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


        [HttpGet]
        public string Get(bool includeUpperCase, bool includeLowerCase, bool includeNumbers, bool includeSpecialChars, int stringlength)
        {

            if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialChars)
            {
                return null;
            }
            StringBuilder masterstring = new StringBuilder();

            if (includeUpperCase)
            {
                masterstring.Append(UpperCaseCharacters);
            }
            if (includeLowerCase)
            {
                masterstring.Append(LowerCaseCharacters);
            }
            if (includeNumbers)
            {
                masterstring.Append(Numbers);
            }
            if (includeSpecialChars)
            {
                masterstring.Append(SpecialCharacters);
            }

            var stringsChars = new char[stringlength];
            var random = new Random();
            for (int i = 0; i < stringsChars.Length; i++)
            {
                stringsChars[i] = masterstring[random.Next(masterstring.Length)];
            }
            var finalstring = new string(stringsChars);
            return finalstring;
        }
    }
}
