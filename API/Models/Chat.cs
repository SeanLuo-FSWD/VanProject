using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Chat
    {
        public string ChatId { get; set; }
        public string type { get; set; }

        public List<Chat_AppUser> chat_AppUsers { get; set; }

        public List<Message> messages { get; set; }
    }
}