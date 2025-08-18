using Microsoft.AspNetCore.Identity;
using MovieApi.Application.Features.CQRSDesingPattern.Queries.UserQueries;
using MovieApi.Application.Features.CQRSDesingPattern.Results.UserResults;
using MovieApi.Persistence.Identity;
using System.Threading.Tasks;

public class GetUserWithTokenHandler
{
    private readonly UserManager<AppUser> _userManager;

    public GetUserWithTokenHandler(UserManager<AppUser> userManager)
    {
        _userManager = userManager;
    }

    public async Task<GetUserWithTokenQueryResult> Handle(GetUserWithTokenQuery query)
    {
        if (query == null || string.IsNullOrEmpty(query.UserId))
            return null;

        var user = await _userManager.FindByIdAsync(query.UserId);
        if (user == null) return null;

        return new GetUserWithTokenQueryResult
        {
            Id = user.Id,
            UserName = user.UserName,
            Email = user.Email,
            Name = user.Name,
            SurName = user.Surname,
            ImgUrl = user.ImgUrl,
        };
    }
}
