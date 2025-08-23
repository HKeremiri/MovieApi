using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MovieApi.Application.Features.CQRSDesingPattern.Commands.UserCommands;
using MovieApi.Application.Features.CQRSDesingPattern.Handlers.UserHandlers;
using MovieApi.Application.Features.CQRSDesingPattern.Queries.UserQueries;
using System.Security.Claims;
using System.Threading.Tasks;

namespace MovieApi.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UsersController : ControllerBase
    {
        private readonly GetUserWithTokenHandler _getUserWithTokenHandler;
        private readonly UpdateUserHandler _updateuserhandler;
        private readonly UpdateUserPasswordHandler _updateUserPasswordHandler;

        public UsersController(GetUserWithTokenHandler getUserWithTokenHandler, UpdateUserHandler updateuserhandler, UpdateUserPasswordHandler updateUserPasswordHandler)
        {
            _getUserWithTokenHandler = getUserWithTokenHandler;
            _updateuserhandler = updateuserhandler;
            _updateUserPasswordHandler = updateUserPasswordHandler;
        }


        // GET api/users/myprofile
        [HttpGet("myprofile")]
        public async Task<IActionResult> GetProfile()
        {
            // Token zaten doğrulandı; claimlerden userId çek
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier)
                         ?? User.FindFirstValue(ClaimTypes.Name)
                         ?? User.FindFirstValue("sub");

            if (string.IsNullOrEmpty(userId))
                return Unauthorized();

            var query = new GetUserWithTokenQuery(userId);
            var user = await _getUserWithTokenHandler.Handle(query);
            if (user == null) return NotFound("User not found.");

            return Ok(user);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateUser(UpdateUserCommand userCommand)
        {
            await _updateuserhandler.Handler(userCommand);
            return Ok("Kullanıcı Güncellendi");
        }

        [HttpPut("updatepassword")]
        public async Task<IActionResult> UpdatePassword(UpdateUserPasswordCommand userPasswordCommand)
        {
            if (userPasswordCommand == null || string.IsNullOrEmpty(userPasswordCommand.UserId))
                return BadRequest("Invalid user data.");

            try
            {
                await _updateUserPasswordHandler.Handle(userPasswordCommand);
                return Ok("Şifre Güncellendi");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
