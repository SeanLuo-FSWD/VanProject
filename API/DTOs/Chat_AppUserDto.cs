using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using API.Models;

namespace API.DTOs
{
    public class Chat_AppUserDto
    {
        // public string Chat_AppUserId { get; set; }
        // public string ChatId { get; set; }
        // public string AppUserId { get; set; }
        [Key]
        public string Chat_AppUserId { get; set; }

        public string ChatId { get; set; }

        [ForeignKey("ChatId")]
        public Chat chat { get; set; }

        public string AppUserId { get; set; }

        [ForeignKey("AppUserId")] // Should be fine as "AppUserId" is just for internal reference. Below should really takes the actual "Id" to map to it.
        public AppUser appUser { get; set; }
    }
}