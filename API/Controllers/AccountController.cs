using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using API.DTOs;
using API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Cors;
using AutoMapper;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;
        public AccountController( UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IConfiguration config, IMapper mapper) {
            _mapper = mapper;
            _config = config;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpGet("test")]
        public async void Test() {
            Console.WriteLine("444444444444444444");
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginObj) {

            Console.WriteLine("login login login login login");

            Console.WriteLine(loginObj.Email);
            Console.WriteLine(loginObj.Password);

            var userObj = await _userManager.Users
                .SingleOrDefaultAsync(x => x.Email == loginObj.Email.ToLower());

            Console.WriteLine("___________userObj userObj userObj");

            foreach (var property in userObj.GetType().GetProperties())
            {
                Console.WriteLine(property.Name); //FirstName
                Console.WriteLine(property.GetValue(userObj,null)); //Bob
            }

            Console.WriteLine("userObj userObj userObj____________");


            if (userObj == null) return Unauthorized("Invalid email");

            var result = await _signInManager
                .CheckPasswordSignInAsync(userObj, loginObj.Password, false);

            if (!result.Succeeded) return Unauthorized();

            var userDto = new UserDto {
                UserName = userObj.UserName,
                Token = await GenerateJwt(userObj),
            };

            return userDto;
        }


        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto) {

            var UserExists = await _userManager.Users.AnyAsync(x => x.Email.ToLower() == registerDto.Email.ToLower());

            if (UserExists) return BadRequest("Email is taken");

            Console.WriteLine("222222222222222");
            Console.WriteLine(registerDto);
            var user = _mapper.Map<AppUser>(registerDto);  
            Console.WriteLine(user);

            user.Email = registerDto.Email.ToLower();

            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (!result.Succeeded) return BadRequest(result.Errors);

            return Ok(200);
        }


        private async Task<string> GenerateJwt(AppUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.NameId, user.Id),
                new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName),
            };
            
            SymmetricSecurityKey key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["JwtKey"]));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(10),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}