using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Application.Features.CQRSDesingPattern.Queries.UserQueries
{
   public class GetUserWithTokenQuery
    {
        public string UserId { get; set; }

        public GetUserWithTokenQuery() { }

        public GetUserWithTokenQuery(string userId)
        {
            UserId = userId;
        }
    }
}
