using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class ModelBuilderExtensions
    {
        public static void Seed(this ModelBuilder builder)
        {            
            builder.Entity<AppUser>().HasData(
                GetAppUsers()
            );
            
            builder.Entity<Chat>().HasData(
                GetChats()
            );

            builder.Entity<Chat_AppUser>().HasData(
                GetChat_AppUser()
            );

            builder.Entity<Message>().HasData(
                GetMessages()
            );
        }

        public static List<Chat> GetChats()
        {
            List<Chat> chats = new List<Chat>() {
                new Chat()
                {
                    ChatId = "alice_bob_id_1",
                    type = "private",
                },
                new Chat()
                {
                    ChatId = "alice_cindy_id_1",
                    type = "private",
                },
            };

            return chats;
        }

        public static List<Message> GetMessages()
        {
            List<Message> messages = new List<Message>()
            {
                new Message()
                {
                    MessageId = "Message_1",
                    content = "Hi Bob, how are you?",
                    ChatId = "alice_bob_id_1",
                    AppUserId = "alice_id"
                },             
                new Message()
                {
                    MessageId = "Message_2",
                    content = "Hi Alice, I am fine, thanks",
                    ChatId = "alice_bob_id_1",
                    AppUserId = "bob_id"
                },
                new Message()
                {
                    MessageId = "Message_3",
                    content = "hi cindy this is alice",
                    ChatId = "alice_cindy_id_1",
                    AppUserId = "alice_id"
                },
            };

            return messages;
        }

        public static List<Chat_AppUser> GetChat_AppUser()
        {
            List<Chat_AppUser> chat_AppUsers = new List<Chat_AppUser>()
            {
                new Chat_AppUser()
                {
                    Chat_AppUserId = "Chat_AppUserId_1",
                    ChatId = "alice_bob_id_1",
                    AppUserId = "bob_id"
                },             
                new Chat_AppUser()
                {
                    Chat_AppUserId = "Chat_AppUserId_2",
                    ChatId = "alice_bob_id_1",
                    AppUserId = "alice_id"
                },
                new Chat_AppUser()
                {
                    Chat_AppUserId = "Chat_AppUserId_3",
                    ChatId = "alice_cindy_id_1",
                    AppUserId = "cindy_id"
                },             
                new Chat_AppUser()
                {
                    Chat_AppUserId = "Chat_AppUserId_4",
                    ChatId = "alice_cindy_id_1",
                    AppUserId = "alice_id"
                }
            };

            return chat_AppUsers;
        }

        public static List<AppUser> GetAppUsers()
        {
            PasswordHasher<AppUser> passwordHasher = new PasswordHasher<AppUser>();

            List<AppUser> appUsers = new List<AppUser>() {
                new AppUser()
                {
                    Id = "bob_id",
                    UserName = "bob",
                    Email = "bob@bob.com",
                    Age = 25,
                    Gender = "Male",
                    City = "Vancouver",
                }, new AppUser()
                {
                    Id = "alice_id",
                    UserName = "alice",
                    Email = "alice@alice.com",
                    Age = 45,
                    Gender = "Female",
                    City = "Richmond",
                }, new AppUser()
                {
                    Id = "cindy_id",
                    UserName = "cindy",
                    Email = "cindy@cindy.com",
                    Age = 40,
                    Gender = "Female",
                    City = "Burnaby",
                }
            };

            foreach (var item in appUsers)
            {
                item.PasswordHash = passwordHasher.HashPassword(item, "Pa$$w0rd");
            }

            return appUsers;
        }
    }
}