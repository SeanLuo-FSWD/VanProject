using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class UserDto
    {
        public string UserName { get; set; }
        public string id { get; set; }
        public string jwtToken { get; set; }
    }
}