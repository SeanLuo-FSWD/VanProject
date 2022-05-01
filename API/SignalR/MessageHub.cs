using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Repositories;
using Microsoft.AspNetCore.SignalR;

namespace API.SignalR
{
    public class MessageHub : Hub
    {
        private readonly MessageRepository _messageRepository;
        private readonly ChatRepository _chatRepository;

        private readonly UsersRepository _usersRepository;

        public MessageHub(MessageRepository messageRepository,UsersRepository usersRepository, ChatRepository chatRepository )
        {
            _usersRepository = usersRepository;
            _messageRepository = messageRepository;
            _chatRepository = chatRepository;
        }
    }
}