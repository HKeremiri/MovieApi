using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Application.Features.MediatorDesingPattern.Queries.TagQueries
{
    public class GetTagByIdQueryResult : IRequest<GetTagByIdQueryResult>
    {
        public GetTagByIdQueryResult(int tagId)
        {
            TagId = tagId;
        }

        public int TagId { get; set; }
       
    }
}
