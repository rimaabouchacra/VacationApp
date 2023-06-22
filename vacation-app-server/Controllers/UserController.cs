// using Microsoft.AspNetCore.Mvc;
// using vacation_app_server.Models;
// using Microsoft.AspNetCore.Authorization;
// using Microsoft.EntityFrameworkCore;
// using System.Linq;
// using System.IdentityModel.Tokens.Jwt;
// using System.Text;
// using Microsoft.IdentityModel.Tokens;
// using System;
// using System.Security.Claims;

// namespace vacation_app_server.Controllers
// {
//     [ApiController]
//     [Route("api/[controller]")]
//     public class UserController : ControllerBase
//     {
//         private readonly ApplicationDbContext _context;

//         public UserController(ApplicationDbContext context)
//         {
//             _context = context;
//         }

//         [HttpPost("signup")]
//         public IActionResult SignupAction(User model)
//         {
//             if (!ModelState.IsValid)
//             {
//                 return BadRequest(ModelState);
//             }

//             var existingUser = _context.Users.FirstOrDefault(u => u.Email == model.Email);
//             if (existingUser != null)
//             {
//                 return Conflict("User already exists.");
//             }

//             _context.Users.Add(model);
//             _context.SaveChanges();

//             return Ok();
//         }

//         [HttpPost("login")]
//         public IActionResult Login(string email, string password)
//         {
//             if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
//             {
//                 return BadRequest("Email and password are required.");
//             }

//             var user = _context.Users.FirstOrDefault(u => u.Email == email && u.Password == password);
//             if (user == null)
//             {
//                 return NotFound("Invalid email or password.");
//             }

//             // Generate and return the JWT token
//             var tokenHandler = new JwtSecurityTokenHandler();
//             var key = Encoding.ASCII.GetBytes("Ha6s0kJqDElpzsKj1smVkFPNrcD7ptnIZgcoe4ntKt1CAyuRzf0lZT2NdRRYYC36"); 
//             var tokenDescriptor = new SecurityTokenDescriptor
//             {
//                 Subject = new ClaimsIdentity(new Claim[]
//                 {
//                     new Claim(ClaimTypes.Name, user.Id.ToString())
//                 }),
//                 Expires = DateTime.UtcNow.AddDays(7), 
//                 SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
//             };
//             var token = tokenHandler.CreateToken(tokenDescriptor);
//             var tokenString = tokenHandler.WriteToken(token);

//             // Return the JWT token
//             return Ok(new { Token = tokenString });
//         }
//     }
// }
using Microsoft.AspNetCore.Mvc;
using vacation_app_server.Models;

namespace vacation_app_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult CreateUser(User user)
        {
            if (ModelState.IsValid)
            {
                _context.Users.Add(user);
                _context.SaveChanges();
                return Ok();
            }

            return BadRequest(ModelState);
        }
    }
}
