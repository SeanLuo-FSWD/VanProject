using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace API.Models
{
    public class AppUser : IdentityUser
    {
        // public string UserName { get; set; }
        public int Age { get; set; }
        public string Gender { get; set; }
        public string City { get; set; }

    }
}