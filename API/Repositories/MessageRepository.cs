using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Models;
using AutoMapper;

namespace API.Repositories
{
    public class MessageRepository
    {

        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        public MessageRepository(ApplicationDbContext context, IMapper mapper) {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<Message>> GetMessages(string chatId) {
                var messages = from m in _context.Messages
                        where m.ChatId == chatId
                        select m;

                return messages;
        }
    }
}