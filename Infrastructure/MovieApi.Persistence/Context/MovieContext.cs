using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MovieApi.Domain.Entities;
using MovieApi.Persistence.Identity;


namespace MovieApi.Persistence.Context
{
    public class MovieContext: IdentityDbContext<AppUser,AppRole,string>
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=DESKTOP-BLM5UT4;initial Catalog=ApiMovieDb;integrated Security=true;TrustServerCertificate=true");
        }

        public DbSet<Movie> Movies { get; set; }
        public DbSet<Cast> Casts { get; set; }

        public DbSet<Review> Reviews { get; set; }

        public DbSet<Tag> Tags { get; set; }

        public DbSet<Category> Categories { get; set; }
    }
}
