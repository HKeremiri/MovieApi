using MediatR;
using System.Collections.Generic;
using MovieApi.Application.Features.CQRSDesingPattern.Results.MovieResults.FavoriteResults;

namespace MovieApi.Application.Features.CQRSDesingPattern.Queries.MovieQueries.FavoriteQueries
{
    // Model binding (controller) için parametresiz ctor eklendi
    public class GetFavoritesByUserIdQuery : IRequest<List<GetFavoritesByUserIdQueryResult>>
    {
        public GetFavoritesByUserIdQuery() { }

        public GetFavoritesByUserIdQuery(string userId)
        {
            UserId = userId;
        }

        // model binding için settable olmalı
        public string UserId { get; set; } = null!;
    }
}
