using Microsoft.AspNetCore.Identity;
using MovieApi.Application.Features.CQRSDesingPattern.Commands.UserCommands;
using MovieApi.Persistence.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Application.Features.CQRSDesingPattern.Handlers.UserHandlers
{
    public class UpdateUserPasswordHandler
    {
        private readonly UserManager<AppUser> _userManager;

        public UpdateUserPasswordHandler(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task Handle(UpdateUserPasswordCommand updateUserPasswordCommand)
        {
            var user = await _userManager.FindByIdAsync(updateUserPasswordCommand.UserId);
            if (user == null)
                throw new InvalidOperationException("Kullanıcı bulunamadı.");

            var result = await _userManager.ChangePasswordAsync(user, updateUserPasswordCommand.OldPassword, updateUserPasswordCommand.NewPassword);
            if (!result.Succeeded)
            {
                var errors = string.Join(", ", result.Errors.Select(e => e.Description));
                throw new InvalidOperationException($"Şifre güncellenemedi: {errors}");
            }
        }
    }
}
