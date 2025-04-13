using MovieApi.Application.Features.CQRSDesingPattern.Queries.MovieQueries;
using MovieApi.Application.Features.CQRSDesingPattern.Results.MovieResults;
using MovieApi.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Application.Features.CQRSDesingPattern.Handlers.MovieHandlers
{
    public class GetMovieByIdQueryHandler
    {
        private readonly MovieContext _context;

        public GetMovieByIdQueryHandler(MovieContext context)
        {
            _context = context;
        }

        public async Task<GetMovieByIdQueryResult> Handle(GetMovieByIdQuery query)
        {
            var values = await _context.Movies.FindAsync(query.MovieId);
            if (values == null)
            {
                return null;
            }
            return new GetMovieByIdQueryResult
            {
                MovieId = values.MovieId,
                Title = values.Title,
                Description = values.Description,
                CoverImageUrl = values.CoverImageUrl,
                CreatedYear = values.CreatedYear,
                Duration = values.Duration,
                Rating = values.Rating,
                ReleaseDate = values.ReleaseDate,
                Status = values.Status
            };
        }
    }
}
