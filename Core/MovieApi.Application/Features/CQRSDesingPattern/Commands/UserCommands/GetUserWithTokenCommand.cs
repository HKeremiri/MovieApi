﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Application.Features.CQRSDesingPattern.Commands.UserCommands
{
   public  class GetUserWithTokenCommand
    {
        public string Token { get; set; }
    }
}
