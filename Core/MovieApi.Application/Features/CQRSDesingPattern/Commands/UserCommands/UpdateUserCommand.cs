using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Application.Features.CQRSDesingPattern.Commands.UserCommands
{
    public class UpdateUserCommand
    {
        public string UserId { get; set; }
        public string Name { get; set; }

        public string SurName { get; set; }

        public string UserName { get; set; }

        public string Email { get; set; }

        public string ImgUrl { get; set; }
    }
}
