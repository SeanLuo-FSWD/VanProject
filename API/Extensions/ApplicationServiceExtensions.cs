using API.Helpers;
using API.Repositories;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config) {

            // services.Configure<CloudinarySettings>(config.GetSection("CloudinarySettings"));

            services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);

            services.AddScoped<UsersRepository>();

            // services.AddDbContext<ApplicationDbContext>(options => {
            //     options.UseSqlite(config.GetConnectionString("DefaultConnection"));
            // });

            return services;
        }
    }
}