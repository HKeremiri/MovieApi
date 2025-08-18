using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
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

        public UsersController(GetUserWithTokenHandler getUserWithTokenHandler)
        {
            _getUserWithTokenHandler = getUserWithTokenHandler;
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
    }
}
