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

        public MovieContext(DbContextOptions<MovieContext> options) : base(options)
        {
        }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Cast> Casts { get; set; }

        public DbSet<Review> Reviews { get; set; }

        public DbSet<Tag> Tags { get; set; }

        public DbSet<Category> Categories { get; set; }

        public DbSet<Favorite> Favorites { get; set; }

        public DbSet<Rating> Ratings { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Favorite composite PK
            modelBuilder.Entity<Favorite>()
                .HasKey(f => new { f.UserId, f.MovieId });

            // Favorite -> Movie
            modelBuilder.Entity<Favorite>()
                .HasOne(f => f.Movie)
                .WithMany(m => m.Favorites)
                .HasForeignKey(f => f.MovieId)
                .OnDelete(DeleteBehavior.Cascade);

            // AppUser -> Favorite  (AppUser.Favorites koleksiyonu burada tanımlı)
            modelBuilder.Entity<AppUser>()
                .HasMany(u => u.Favorites)
                .WithOne() // Favorite tarafında AppUser navigation yok
                .HasForeignKey("UserId") // property ismi domain'de string UserId
                .OnDelete(DeleteBehavior.Cascade);

            // Rating -> Movie
            modelBuilder.Entity<Rating>()
                .HasOne(r => r.Movie)
                .WithMany(m => m.Ratings)
                .HasForeignKey(r => r.MovieId)
                .OnDelete(DeleteBehavior.Cascade);

            // AppUser -> Rating
            modelBuilder.Entity<AppUser>()
                .HasMany(u => u.Ratings)
                .WithOne() // Rating içinde AppUser navigation yok
                .HasForeignKey("UserId")
                .OnDelete(DeleteBehavior.Cascade);
        }



    }
}
