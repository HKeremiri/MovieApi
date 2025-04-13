﻿using MediatR;
using MovieApi.Application.Features.MediatorDesingPattern.Commands.CastCommands;
using MovieApi.Domain.Entities;
using MovieApi.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Application.Features.MediatorDesingPattern.Handlers.CastHandlers
{
    public class CreateCastCommandHandler : IRequestHandler<CreateCastCommand>
    {
        private readonly MovieContext _context;

        public CreateCastCommandHandler(MovieContext context)
        {
            _context = context;
        }

        public async Task Handle(CreateCastCommand request, CancellationToken cancellationToken)
        {
            await _context.Casts.AddAsync(new Cast
            {
                Title = request.Title,
                Name = request.Name,
                Surname = request.Surname,
                ImageUrl = request.ImageUrl,
                Overview = request.Overview,
                Biography = request.Biography               
            }, cancellationToken);
            await _context.SaveChangesAsync();
        }
    }
}
