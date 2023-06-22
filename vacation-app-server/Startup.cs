// using Microsoft.AspNetCore.Builder;
// using Microsoft.AspNetCore.Hosting;
// using Microsoft.EntityFrameworkCore;
// using Microsoft.Extensions.Configuration;
// using Microsoft.Extensions.DependencyInjection;
// using Microsoft.Extensions.Hosting;
// using Microsoft.AspNetCore.Authentication.JwtBearer;
// using System.IdentityModel.Tokens.Jwt;
// using System.Text;

// namespace vacation_app_server 
// {
//     public class Startup
//     {
//         private readonly IConfiguration _configuration;

//         public Startup(IConfiguration configuration)
//         {
//             _configuration = configuration;
//         }

//       public void ConfigureServices(IServiceCollection services)
// {
//     // Configure the DbContext for design-time operations
//     services.AddDbContext<ApplicationDbContext>(options =>
//         options.UseSqlServer(_configuration.GetConnectionString("DefaultConnection")));

//     // Add JWT authentication
//     services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
//         .AddJwtBearer(options =>
//         {
//             options.TokenValidationParameters = new TokenValidationParameters
//             {
//                 ValidateIssuer = true,
//                 ValidateAudience = true,
//                 ValidateLifetime = true,
//                 ValidateIssuerSigningKey = true,
//                 ValidIssuer = "MyLocalAppIssuer",     
//                 ValidAudience = "MyLocalAppAudience", 
//                 IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("Ha6s0kJqDElpzsKj1smVkFPNrcD7ptnIZgcoe4ntKt1CAyuRzf0lZT2NdRRYYC36")) 
//             };
//         });

// }


//     public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
//     {
//         if (env.IsDevelopment())
//     {
//         app.UseDeveloperExceptionPage();
//     }
//     else
//     {
//         // Configure appropriate error handling for production environment
//         app.UseExceptionHandler("/Home/Error");
//         app.UseHsts();
//     }

//     // Enable HTTPS redirection
//     app.UseHttpsRedirection();

//     // Enable static file serving
//     app.UseStaticFiles();

//     // Enable routing
//     app.UseRouting();

//     // Enable authentication
//     app.UseAuthentication();

//     // Enable authorization
//     app.UseAuthorization();

//     // Configure the endpoints
//     app.UseEndpoints(endpoints =>
//     {
//         endpoints.MapControllers(); // Assuming you have controllers for your API endpoints
//         // Add additional endpoint mappings as needed
//     });
//         }
//     }
// }

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using vacation_app_server.Models;

namespace vacation_app_server // Replace 'vacation_app_server' with your actual namespace
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

            services.AddControllers(); // Add this line to enable controllers

            // Add other services and dependencies
            // ...
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // Configure error handling for production environment
                // ...
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers(); // Add this line to map controllers
            });
        }
    }
}
