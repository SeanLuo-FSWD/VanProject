using API.Helpers;

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