using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using AutoMapper;
using API.Repositories;

namespace API.Controllers
{
    public class ChatController : BaseApiController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;
        private readonly ChatRepository _chatRepository;
        private readonly MessageRepository _messageRepository;


        public ChatController( UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IConfiguration config, IMapper mapper, ChatRepository chatRepository, MessageRepository messageRepository) {
            _mapper = mapper;
            _config = config;
            _userManager = userManager;
            _signInManager = signInManager;
            _chatRepository = chatRepository;
            _messageRepository = messageRepository;
        }

        // https://localhost:7277/api/Chat/GetPrivateMessages?chatIds=cindy_id%2Calice_id
        [HttpGet("GetMessages")]
        public async Task<ActionResult<IEnumerable<Message>>> GetMessages([FromQuery] string chatIds) {
            var chat_list_ids = chatIds.Split(",").ToArray();

            string chat_id = await _chatRepository.getPrivateChatId(chat_list_ids);

            if (String.IsNullOrEmpty(chat_id)) return Ok("New chat");

            IEnumerable<Message> messages = await _messageRepository.GetMessages(chat_id);

            return Ok(messages);
        }



    }
}