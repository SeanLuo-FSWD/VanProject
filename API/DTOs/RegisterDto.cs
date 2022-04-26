using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class RegisterDto
    {        
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Age { get; set; }
        public string Gender { get; set; }
        public string City { get; set; }
    }
}