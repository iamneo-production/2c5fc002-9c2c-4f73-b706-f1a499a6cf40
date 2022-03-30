using System;
using System.Collections.Generic;

#nullable disable

namespace Amazepack_Project.Model
{
    public partial class ReviewModel
    {
        public string ReviewId { get; set; }
        public string UserId { get; set; }
        public string UserName { get; set; }
        public string ProductId { get; set; }
        public string ReviewText { get; set; }
    }
}
