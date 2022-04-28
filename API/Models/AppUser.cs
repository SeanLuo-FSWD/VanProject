using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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

        public List<Chat_AppUser> chat_AppUsers { get; set; }

        public List<Message> messages { get; set; }


    }
}