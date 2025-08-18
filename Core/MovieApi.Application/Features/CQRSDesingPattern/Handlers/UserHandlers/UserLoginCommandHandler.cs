using MediatR;
using Microsoft.AspNetCore.Identity;
using MovieApi.Application.Features.CQRSDesingPattern.Commands.UserCommands;
using MovieApi.Application.Interfaces;
using MovieApi.Persistence.Identity;

namespace MovieApi.Application.Features.CQRSDesingPattern.Handlers.UserHandlers
{
    public class UserLoginCommandHandler : IRequestHandler<UserLoginCommand, string>
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly IJwtService _jwtService;

        public UserLoginCommandHandler(
            UserManager<AppUser> userManager,
            SignInManager<AppUser> signInManager,
            IJwtService jwtService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _jwtService = jwtService;
        }

        public async Task<string> Handle(UserLoginCommand request, CancellationToken cancellationToken)
        {
            // 1. Email'e göre kullanıcıyı bul
            var user = await _userManager.FindByEmailAsync(request.Email);
            if (user == null)
                throw new UnauthorizedAccessException("Invalid email or password");

            // 2. Şifreyi kontrol et
            var result = await _signInManager.CheckPasswordSignInAsync(user, request.Password, false);
            if (!result.Succeeded)
                throw new UnauthorizedAccessException("Invalid email or password");

            // 3. JWT Token oluştur
            return _jwtService.GenerateToken(user);
        }
    }
}
