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

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly IConfiguration _config;
        public AccountController( UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IConfiguration config) {
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
            Console.WriteLine("1111111111111111");
            Console.WriteLine(loginObj.Password);
            Console.WriteLine(loginObj.Email);
            var userObj = await _userManager.Users
                .SingleOrDefaultAsync(x => x.Email == loginObj.Email.ToLower());

            if (userObj == null) return Unauthorized("Invalid username");

            var result = await _signInManager
                .CheckPasswordSignInAsync(userObj, loginObj.Password, false);

            if (!result.Succeeded) return Unauthorized();

            var userDto = new UserDto {
                UserName = userObj.UserName,
                Token = await GenerateJwt(userObj),
            };

            return userDto;
        }

        private async Task<string> GenerateJwt(AppUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.NameId, user.Id),
                new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName),
            };

            // var roles = await _userManager.GetRolesAsync(user);

            // claims.AddRange(roles.Select(role => new Claim(ClaimTypes.Role, role))); 
            
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