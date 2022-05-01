using API.Data;
using API.Models;
using AutoMapper;

namespace API.Repositories
{
    public class ChatRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        public ChatRepository(ApplicationDbContext context, IMapper mapper) {
            _context = context;
            _mapper = mapper;
        }

        public async Task<string> getPrivateChatId(IEnumerable<string> chat_list_ids)
        {
            var chat_AppUsers = _context.Chat_AppUsers;
            var chats = _context.Chats;

            var group_list = from ca in chat_AppUsers join c in chats on ca.ChatId equals c.ChatId select new { ChatId = ca.ChatId, chat_AppUsers = c.chat_AppUsers, type = c.type };

            HashSet<string> supplied_chat_strings = new HashSet<string>(chat_list_ids);

            string chat_id = "";

            foreach (var item in group_list)
            {
                if(item.type == "private") {
                HashSet<string> queried_chat_strings = new HashSet<string> {};
                
                    foreach (var chatter in item.chat_AppUsers)
                    {
                        queried_chat_strings.Add(chatter.AppUserId);
                    }

                    var ifMatch = supplied_chat_strings.SetEquals(queried_chat_strings);

                    if(ifMatch){
                        chat_id = item.ChatId;
                        break;
                    }
                }
            }
            return chat_id;
        }


    }
}