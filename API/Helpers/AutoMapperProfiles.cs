using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Models;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, MemberDto>();
            CreateMap<RegisterDto, AppUser>();
            CreateMap<Chat_AppUser, Chat_AppUserDto>();
            CreateMap<Chat_AppUserDto, Chat_AppUser>();
            CreateMap<Chat, ChatDto>();
            CreateMap<ChatDto, Chat>();
        }
    }
}