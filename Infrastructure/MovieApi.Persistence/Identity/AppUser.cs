using Microsoft.AspNetCore.Identity;
using MovieApi.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Persistence.Identity
{
   public class AppUser : IdentityUser
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string? ImgUrl { get; set; }

        public virtual List<Favorite> Favorites { get; set; }

        public virtual List<Rating> Ratings { get; set; }

    }
}
