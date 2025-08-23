using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Application.Features.CQRSDesingPattern.Commands.MovieCommands.FavoritesCommands
{
   public  class AddFavoriteCommand
    {
        public string UserId { get; set; }

        public int MovieId { get; set; }
    }
}
