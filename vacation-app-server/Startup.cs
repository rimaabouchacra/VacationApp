using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.OpenApi.Models;
using Microsoft.Extensions.Options;

namespace vacation_app_server
{
    public class Startup
    {
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(_configuration.GetConnectionString("DefaultConnection")));

          
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Vacation API", Version = "v1" });
            });



            

        }


        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
            {

            if (env.IsDevelopment())
                {
                app.UseSwagger(); // Enable Swagger
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Vacation API v1");
                });
            }
                else
                {
                    // Configure appropriate error handling for production environment
                    app.UseExceptionHandler("/Home/Error");
                    app.UseHsts();
                }

            // Enable HTTPS redirection
            app.UseHttpsRedirection();

            // Enable static file serving
            app.UseStaticFiles();

            // Enable routing
            app.UseRouting();

            // Enable authentication
            app.UseAuthentication();

            // Enable authorization
            //app.UseAuthorization();

            app.UsePathBase("/");

            // Configure the endpoints
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers(); // Assuming you have controllers for your API endpoints
                                            // Add additional endpoint mappings as needed
                     });
        }
    }
}

