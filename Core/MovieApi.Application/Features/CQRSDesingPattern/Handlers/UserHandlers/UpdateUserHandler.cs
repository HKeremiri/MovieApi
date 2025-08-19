using MovieApi.Application.Features.CQRSDesingPattern.Commands.UserCommands;
using MovieApi.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Application.Features.CQRSDesingPattern.Handlers.UserHandlers
{
    public class UpdateUserHandler
    {
        private readonly MovieContext _context;

        public UpdateUserHandler(MovieContext context)
        {
            _context = context;
        }

        public async Task Handler(UpdateUserCommand command)
        {
            var user = await _context.Users.FindAsync(command.UserId);
            if (user != null)
            {
                user.Name = command.Name;
                user.Surname = command.SurName;
                user.Email = command.Email;
                user.UserName = command.UserName;
                user.ImgUrl = command.ImgUrl;
                await _context.SaveChangesAsync();
            }

        }
    }
}
