using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieApi.Application.Features.CQRSDesingPattern.Commands.UserCommands;
using MovieApi.Application.Features.CQRSDesingPattern.Handlers.UserHandlers;


namespace MovieApi.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistersController : ControllerBase
    {
        private readonly CreateUserRegisterHandler _createUserRegisterHandler;

        public RegistersController(CreateUserRegisterHandler createUserRegisterHandler)
        {
            _createUserRegisterHandler = createUserRegisterHandler;
        }

        [HttpPost]
        public async Task<IActionResult> CreateUserRegister(CreateUserRegisterCommand command)
        {
            await _createUserRegisterHandler.Handle(command);
            return Ok(new { message = "User registered successfully." });
        }
    }
}
