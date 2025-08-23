using MediatR;
using Microsoft.EntityFrameworkCore;
using MovieApi.Application.Features.CQRSDesingPattern.Queries.MovieQueries.FavoriteQueries;
using MovieApi.Application.Features.CQRSDesingPattern.Results.MovieResults.FavoriteResults;
using MovieApi.Persistence.Context;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace MovieApi.Application.Features.CQRSDesingPattern.Handlers.MovieHandlers.FavoriteHandlers
{
    public class GetFavoritesByUserIdQueryHandler : IRequestHandler<GetFavoritesByUserIdQuery, List<GetFavoritesByUserIdQueryResult>>
    {
        private readonly MovieContext _context;

        public GetFavoritesByUserIdQueryHandler(MovieContext context)
        {
            _context = context;
        }

        public async Task<List<GetFavoritesByUserIdQueryResult>> Handle(GetFavoritesByUserIdQuery request, CancellationToken cancellationToken)
        {
            if (string.IsNullOrWhiteSpace(request.UserId))
                return new List<GetFavoritesByUserIdQueryResult>();

            var results = await _context.Favorites
                .AsNoTracking()
                .Where(f => f.UserId == request.UserId)
                .Select(f => new GetFavoritesByUserIdQueryResult
                {
                    MovieId = f.MovieId,
                    Title = f.Movie.Title,
                    CoverImageUrl = f.Movie.CoverImageUrl,
                    Status = f.Movie.Status,
                    Rating = f.Movie.Ratings.Any()
                        ? (decimal)f.Movie.Ratings.Average(r => r.Value)
                        : 0m,
                    Description = f.Movie.Description,
                    Duration = f.Movie.Duration,
                    ReleaseDate = f.Movie.ReleaseDate,
                    CreatedYear = f.Movie.CreatedYear
                })
                .ToListAsync(cancellationToken);

            return results;
        }
    }
}
