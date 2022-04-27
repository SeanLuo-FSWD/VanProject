using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Models;
using API.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UsersController : BaseApiController
    {
        private readonly UsersRepository _usersRepository;

        public UsersController(UsersRepository usersRepository)
        {
            _usersRepository = usersRepository;
        }

        [HttpGet("members")]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetMembers()
        {
            var members = await _usersRepository.GetMembers();

            return Ok(members);
        }

        [HttpGet("member/{userId}")]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetMember(string userId)
        {
            var member = await _usersRepository.GetMember(userId);

            return Ok(member);
        }
    }
}