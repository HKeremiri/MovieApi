using MediatR;
using MovieApi.Application.Features.MediatorDesingPattern.Commands.CastCommands;
using MovieApi.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Application.Features.MediatorDesingPattern.Handlers.CastHandlers
{
  public class UpdateCastCommandHandler : IRequestHandler<UpdateCastCommand>
    {
        private readonly MovieContext _context;
        public UpdateCastCommandHandler(MovieContext context)
        {
            _context = context;
        }

        public async Task Handle(UpdateCastCommand request, CancellationToken cancellationToken)
        {
            var values = await _context.Casts.FindAsync(request.CastId);
            if (values != null)
            {
                values.Title = request.Title;
                values.Name = request.Name;
                values.Surname = request.Surname;
                values.ImageUrl = request.ImageUrl;
                values.Overview = request.Overview;
                values.Biography = request.Biography;
                _context.Casts.Update(values);
                await _context.SaveChangesAsync(cancellationToken);
            }            
        }
    }
}
