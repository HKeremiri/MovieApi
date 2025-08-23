using Microsoft.EntityFrameworkCore;
using MovieApi.Persistence.Context;
using System;
using System.Threading;
using System.Threading.Tasks;
using MovieApi.Application.Features.CQRSDesingPattern.Commands.MovieCommands.FavoriteCommands;

namespace MovieApi.Application.Features.CQRSDesingPattern.Handlers.MovieHandlers.FavoriteHandlers
{
    public class RemoveFavoriteHandler
    {
        private readonly MovieContext _context;

        public RemoveFavoriteHandler(MovieContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        /// <summary>
        /// Returns true if a favorite was removed; false if no matching favorite was found.
        /// </summary>
        public async Task<bool> Handle(RemoveFavoriteCommand command, CancellationToken cancellationToken = default)
        {
            if (command == null) throw new ArgumentNullException(nameof(command));

            var favorite = await _context.Favorites
                .FirstOrDefaultAsync(f => f.UserId == command.UserId && f.MovieId == command.MovieId, cancellationToken);

            if (favorite == null) return false;

            _context.Favorites.Remove(favorite);
            await _context.SaveChangesAsync(cancellationToken);

            return true;
        }
    }
}
