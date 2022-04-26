using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<AppUser> AppUsers { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<AppUser>().HasData(
                GetAppUsers()
            );
        }

        public static List<AppUser> GetAppUsers()
        {
            PasswordHasher<AppUser> passwordHasher = new PasswordHasher<AppUser>();

            List<AppUser> appUsers = new List<AppUser>() {
                new AppUser()
                {
                    UserName = "bob",
                    Email = "bob@bob.com",
                    Age = 15,
                    Gender = "Male",
                    City = "Vancouver",
                }, new AppUser()
                {
                    UserName = "alice",
                    Email = "alice@alice.com",
                    Age = 45,
                    Gender = "Female",
                    City = "Richmond",
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