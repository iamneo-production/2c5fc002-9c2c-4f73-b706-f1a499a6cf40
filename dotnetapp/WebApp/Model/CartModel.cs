using System;
using System.Collections.Generic;

#nullable disable

namespace Amazepack_Project.Model
{
    public partial class CartModel
    {
        public string CartItemId { get; set; }
        public string UserId { get; set; }
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public string Price { get; set; }
        public int? Quantity { get; set; }
    }
}
