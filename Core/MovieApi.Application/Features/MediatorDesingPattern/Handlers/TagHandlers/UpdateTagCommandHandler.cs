using MediatR;
using MovieApi.Application.Features.MediatorDesingPattern.Commands.TagCommands;
using MovieApi.Persistence.Context;

namespace MovieApi.Application.Features.MediatorDesingPattern.Handlers.TagHandlers
{
    public class UpdateTagCommandHandler : IRequestHandler<UpdateTagCommand>
    {
        private readonly MovieContext _context;
        public UpdateTagCommandHandler(MovieContext context)
        {
            _context = context;
        }

        public async Task Handle(UpdateTagCommand request, CancellationToken cancellationToken)
        {
            var values = await _context.Tags.FindAsync(request.TagId);
            if (values != null)
            {
              values.Title = request.Title;
                values.TagId = request.TagId;
                _context.Tags.Update(values);
                await _context.SaveChangesAsync(cancellationToken);
            }
        }
    }
}
