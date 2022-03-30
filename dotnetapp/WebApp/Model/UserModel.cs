using System;
using System.Collections.Generic;

#nullable disable

namespace Amazepack_Project.Model
{
    public partial class UserModel
    {
        public string UserId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }
        public string MobileNumber { get; set; }
        public bool? Active { get; set; }
        public string Role { get; set; }
    }
}
