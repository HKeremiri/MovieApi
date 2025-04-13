using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieApi.Application.Features.MediatorDesingPattern.Commands.CastCommands;
using MovieApi.Application.Features.MediatorDesingPattern.Queries.CastQueries;

namespace MovieApi.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CastsController : ControllerBase
    {
        private readonly IMediator _mediator;
        public CastsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> CastList()
        {
            var result = await _mediator.Send(new GetCastQuery());
            return Ok(result);
        }

        [HttpPost]

        public async Task<IActionResult> CreateCats(CreateCastCommand command)
        {
            await _mediator.Send(command);
            return Ok("Ekleme işlemi Başarılı");
        }

        [HttpDelete]

        public async Task<IActionResult> DeleteCast(int id)
        {
           await _mediator.Send(new RemoveCastCommand(id));
            return Ok("Silme işlemi Başarılı");
        }

        [HttpGet("GetCastById")]

        public async Task<IActionResult> GetCastById(int id)
        {
            var result = await _mediator.Send(new GetCastByIdQuery(id));
            return Ok(result);
        }

        [HttpPut]

        public async Task<IActionResult> UpdateCast(UpdateCastCommand command)
        {
            await _mediator.Send(command);
            return Ok("Güncelleme işlemi Başarılı");
        }
    }
}
