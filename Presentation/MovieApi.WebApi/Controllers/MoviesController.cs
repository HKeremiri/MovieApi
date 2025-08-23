using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieApi.Application.Features.CQRSDesingPattern.Commands.MovieCommands;
using MovieApi.Application.Features.CQRSDesingPattern.Commands.MovieCommands.FavoriteCommands;
using MovieApi.Application.Features.CQRSDesingPattern.Commands.MovieCommands.FavoritesCommands;
using MovieApi.Application.Features.CQRSDesingPattern.Handlers.MovieHandlers;
using MovieApi.Application.Features.CQRSDesingPattern.Handlers.MovieHandlers.FavoriteHandlers;
using MovieApi.Application.Features.CQRSDesingPattern.Queries.MovieQueries;
using MovieApi.Application.Features.CQRSDesingPattern.Queries.MovieQueries.FavoriteQueries;

namespace MovieApi.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly GetMovieByIdQueryHandler _getMovieByIdQueryHandler;
        private readonly GetMovieQueryHandler _getMovieQueryHandler;
        private readonly CreateMovieCommandHandler _createMovieCommandHandler;
        private readonly UpdateMovieCommandHandler _updateMovieCommandHandler;
        private readonly RemoveMovieCommandHandler _removeMovieCommandHandler;
        private readonly AddFavoriteHandler _addFavoriteHandler;
        private readonly RemoveFavoriteHandler _removeFavoriteHandler;
        private readonly GetFavoritesByUserIdQueryHandler _getFavoritesByUserIdQueryHandler;

        public MoviesController(GetMovieByIdQueryHandler getMovieByIdQueryHandler, GetMovieQueryHandler getMovieQueryHandler, CreateMovieCommandHandler createMovieCommandHandler, UpdateMovieCommandHandler updateMovieCommandHandler, RemoveMovieCommandHandler removeMovieCommandHandler, AddFavoriteHandler addFavoriteHandler, RemoveFavoriteHandler removeFavoriteHandler, GetFavoritesByUserIdQueryHandler getFavoritesByUserIdQueryHandler)
        {
            _getMovieByIdQueryHandler = getMovieByIdQueryHandler;
            _getMovieQueryHandler = getMovieQueryHandler;
            _createMovieCommandHandler = createMovieCommandHandler;
            _updateMovieCommandHandler = updateMovieCommandHandler;
            _removeMovieCommandHandler = removeMovieCommandHandler;
            _addFavoriteHandler = addFavoriteHandler;
            _removeFavoriteHandler = removeFavoriteHandler;
            _getFavoritesByUserIdQueryHandler = getFavoritesByUserIdQueryHandler;
        }

        [HttpGet("MovieList")]
        public async Task<IActionResult> MovieList()
        {
            var result = await _getMovieQueryHandler.Handle();
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> CreateMovie(CreateMovieCommand command)
        {
            await _createMovieCommandHandler.Handle(command);
            return Ok("Film Eklendi");
        }
        [HttpDelete]
        public async Task<IActionResult> RemoveMovie(int id)
        {
            await _removeMovieCommandHandler.Handle(new RemoveMovieCommand(id));
            return Ok("Film Silindi");
        }
        [HttpPut]
        public async Task<IActionResult> UpdateMovie(UpdateMovieCommand command)
        {
            await _updateMovieCommandHandler.Handle(command);
            return Ok("Film Güncellendi");
        }
        [HttpGet("GetMovie")]
        public async Task<IActionResult> GetMovieById(int id)
        {
            var result = await _getMovieByIdQueryHandler.Handle(new GetMovieByIdQuery(id));
            return Ok(result);
        }
        [HttpPost("AddFavorite")]
        public async Task<IActionResult> AddFavorite([FromBody] AddFavoriteCommand command, CancellationToken cancellationToken)
        {
            try
            {
                var added = await _addFavoriteHandler.Handle(command, cancellationToken);
                if (!added)
                    return Conflict("Film zaten favorilerde.");

                return Ok("Film favorilere eklendi.");
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpDelete("RemoveFavorite")]
        public async Task<IActionResult> RemoveFavorite([FromBody] RemoveFavoriteCommand command, CancellationToken cancellationToken)
        {
            var removed = await _removeFavoriteHandler.Handle(command, cancellationToken);
            if (!removed)
                return NotFound("Belirtilen favori kaydı bulunamadı.");

            return Ok("Film favorilerden silindi.");
        }

     [HttpGet("GetFavoritesByUserId")]
        public async Task<IActionResult> GetFavoritesByUserId([FromQuery] GetFavoritesByUserIdQuery query, CancellationToken cancellationToken)
        {
    var result = await _getFavoritesByUserIdQueryHandler.Handle(query, cancellationToken);

    if (result == null || !result.Any())
        return NotFound("Favori listesi bulunamadı.");

    return Ok(result);
        }
    }
}
