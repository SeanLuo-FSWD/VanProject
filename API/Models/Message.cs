using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Message
    {
        public string MessageId { get; set; }
        public string content { get; set; }
        public DateTime messageSent { get; set; } = DateTime.UtcNow;

        public string ChatId { get; set; }
        [ForeignKey("ChatId")]
        public Chat chat { get; set; }

        public string AppUserId { get; set; }
        [ForeignKey("AppUserId")]
        public AppUser appUser { get; set; }
    }
}