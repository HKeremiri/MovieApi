using MovieApi.Application.Features.CQRSDesingPattern.Commands.MovieCommands;
using MovieApi.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Application.Features.CQRSDesingPattern.Handlers.MovieHandlers
{
   public class RemoveMovieCommandHandler
    {
        private readonly MovieContext _context;
        public RemoveMovieCommandHandler(MovieContext context)
        {
            _context = context;
        }
        public async void Handle(RemoveMovieCommand command)
        {
            var movie = await _context.Movies.FindAsync(command.MovieId);
            if (movie != null)
            {
                _context.Movies.Remove(movie);
                await _context.SaveChangesAsync();
            }
        }
    }
}
