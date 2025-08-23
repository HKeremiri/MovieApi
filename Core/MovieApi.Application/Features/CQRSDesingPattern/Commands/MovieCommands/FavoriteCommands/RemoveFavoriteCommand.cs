using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Application.Features.CQRSDesingPattern.Commands.MovieCommands.FavoriteCommands
{
   public class RemoveFavoriteCommand
    {
        public string UserId { get; set; }

        public int MovieId { get; set; }
    }
}
