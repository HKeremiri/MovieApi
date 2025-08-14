using MovieApi.Persistence.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Application.Interfaces
{
    public interface IJwtService
    {
        string GenerateToken(AppUser user);
    }
}
