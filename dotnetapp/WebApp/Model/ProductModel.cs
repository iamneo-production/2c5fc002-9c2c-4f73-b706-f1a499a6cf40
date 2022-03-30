using System;
using System.Collections.Generic;

#nullable disable

namespace Amazepack_Project.Model
{
    public partial class ProductModel
    {
        public string ProductId { get; set; }
        public string ImageUrl { get; set; }
        public string ProductName { get; set; }
        public string Price { get; set; }
        public string Description { get; set; }
        public string Quantity { get; set; }
    }
}