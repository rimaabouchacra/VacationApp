using Microsoft.EntityFrameworkCore;
using vacation_app_server.Models; // Add this line to reference the models

namespace vacation_app_server
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; } // Add this line to reference the User model
        public DbSet<Vacation> Vacations { get; set; } // Add this line to reference the Vacation model

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Vacation>()
               .HasOne(v => v.User) // Vacation has one User
               .WithMany(u => u.Vacations) // User has many Vacations
               .HasForeignKey(v => v.UserId); // Use UserId as the foreign key
        }
    }
}
