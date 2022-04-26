using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using API.Data;
using Microsoft.EntityFrameworkCore;
using API.Helpers;
// using AutoMapper;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config) {

            // services.Configure<CloudinarySettings>(config.GetSection("CloudinarySettings"));

            services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly); 

            // services.AddDbContext<ApplicationDbContext>(options => {
            //     options.UseSqlite(config.GetConnectionString("DefaultConnection"));
            // });

            return services;
        }
    }
}