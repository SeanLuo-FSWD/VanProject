using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class MemberDto
    {
        public string Id { get; set; }
        public int Age { get; set; }
        public string UserName { get; set; }

        public string Gender { get; set; }

        public string City { get; set; }
    }
}