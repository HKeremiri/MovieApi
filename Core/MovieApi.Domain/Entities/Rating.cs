using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Domain.Entities
{
    public class Rating
    {
        public int RatingId { get; set; }
        public int Value { get; set; } // 1..10
        public string UserId { get; set; }
        public int MovieId { get; set; }        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public virtual Movie Movie { get; set; }
        // AppUser yok
    }
}
