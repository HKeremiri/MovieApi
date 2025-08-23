using Microsoft.EntityFrameworkCore;
using MovieApi.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MovieApi.Application.Features.CQRSDesingPattern.Commands.MovieCommands.FavoritesCommands;

namespace MovieApi.Application.Features.CQRSDesingPattern.Handlers.MovieHandlers.FavoriteHandlers
{
    public class AddFavoriteHandler
    {
        private readonly MovieContext _context;

        public AddFavoriteHandler(MovieContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        /// <summary>
        /// Returns true if favorite was added; false if it already existed.
        /// Throws KeyNotFoundException if movie doesn't exist.
        /// </summary>
        public async Task<bool> Handle(AddFavoriteCommand command, CancellationToken cancellationToken = default)
        {
            if (command == null) throw new ArgumentNullException(nameof(command));

            // Duplicate check
            var alreadyExists = await _context.Favorites
                .AnyAsync(f => f.UserId == command.UserId && f.MovieId == command.MovieId, cancellationToken);

            if (alreadyExists) return false;

            // Movie existence kontrolü
            var movieExists = await _context.Movies
                .AnyAsync(m => m.MovieId == command.MovieId, cancellationToken);

            if (!movieExists)
                throw new KeyNotFoundException($"Movie with id '{command.MovieId}' not found.");

            var favorite = new Domain.Entities.Favorite
            {
                UserId = command.UserId,
                MovieId = command.MovieId
            };

            await _context.Favorites.AddAsync(favorite, cancellationToken);
            await _context.SaveChangesAsync(cancellationToken);

            return true;
        }
    }
}
