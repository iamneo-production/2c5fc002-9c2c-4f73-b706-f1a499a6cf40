using Amazepack_Project.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AmazePackWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserModelController : ControllerBase

    {
        private readonly Amazepack_ProjectContext _context;
        public UserModelController(Amazepack_ProjectContext context)
        {
            _context = context;
        }

        // GET: api/<PlanController>
        [HttpGet("getUser")]
        public IEnumerable<UserModel> Get()
        {
            return _context.UserModels.ToList();
        }

        // GET api/<PlanController>/5
        [HttpGet("getUser/{id}")]
        public IActionResult GetUser(string id)
        {
            var plan = _context.UserModels.Find(id);
            if (plan != null)
            {
                return Ok(new { StatusCode = 200, Plans = plan });
            }
            return NotFound(new
            {
                StatusCode = 400,
                Message = "User Not Found"
            });
        }

        // POST api/<PlanController>
        //  [Route("addPlan")]
        [HttpPost("addUser")]
        public IActionResult Post([FromBody] UserModel plan)
        {
            if (plan == null)
            {
                return BadRequest();
            }
            else
            {
                _context.UserModels.Add(plan);
                _context.SaveChanges();
                return Ok(new

                {
                    StatusCode = 200,
                    Message = "User Added Successufully"
                });
            }
        }
        
        // PUT api/<PlanController>/5
        //  [Route("editPlan")]
        [HttpPut("editUser/{id}")]
        public IActionResult Put(string id, [FromBody] UserModel plan)
        {
            if (plan == null)
            {
                return BadRequest();
            }
            else
            {
                var user = _context.UserModels.AsNoTracking().FirstOrDefault(e => e.UserId == plan.UserId);
                if (user == null)
                {
                    return NotFound(new
                    {
                        StatusCode = 404,
                        Message = "User not found",
                    });
                }
                else
                {
                    _context.Entry(plan).State = EntityState.Modified;
                    _context.SaveChanges();
                    return Ok(new
                    {
                        StatusCode = 200,
                        Message = "User Updated Successfully"
                    });
                }
            }
        }

        // DELETE api/<PlanController>/5
        //  [Route("deletePlan")]
        [HttpDelete("deleteUser/{id}")]
        public IActionResult Delete(string id)
        {
            var user = _context.UserModels.Find(id);
            if (user == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "User not found",
                });
            }
            else
            {
                _context.UserModels.Remove(user);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "User Deleted"
                });
            }
        }
    
    }
}
