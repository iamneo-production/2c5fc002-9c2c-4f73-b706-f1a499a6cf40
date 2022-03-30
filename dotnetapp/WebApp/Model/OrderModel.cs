using System;
using System.Collections.Generic;

#nullable disable

namespace Amazepack_Project.Model
{
    public partial class OrderModel
    {
        public string OrderId { get; set; }
        public string UserId { get; set; }
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public int? Quantity { get; set; }
        public string TotalPrice { get; set; }
        public string Status { get; set; }
        public string Price { get; set; }
    }
}
