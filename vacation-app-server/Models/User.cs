using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace vacation_app_server.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        public List<Vacation> Vacations { get; set; } // Add this line
    }
}
