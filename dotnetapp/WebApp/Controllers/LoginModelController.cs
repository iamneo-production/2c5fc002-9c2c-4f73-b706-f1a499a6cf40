using Amazepack_Project.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Amazepack_Project.Controllers
{
      [Route("")]
      [ApiController]
      public class LoginModelController : ControllerBase
      {
            private readonly Amazepack_ProjectContext _context;
            public LoginModelController(Amazepack_ProjectContext context)
            {
                  _context = context;
            }
            [HttpPost("user/login")]
            public async Task<IActionResult> IsUserPresent([FromBody] LoginModel data)
            {
                  if(data == null){
                        return BadRequest();
                  }else{
                       _context.LoginModels.Add(data);
                       _context.SaveChanges();
                       return Ok(
                             new{
                                   StatusCode = 200,
                                   Message = "Login History added successfully"
                             }
                       ); 
                  }
            }


      
      }
}
