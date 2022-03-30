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
    public class CartModelController : ControllerBase

    {
        private readonly Amazepack_ProjectContext _context;
        public CartModelController(Amazepack_ProjectContext context)
        {
            _context = context;
        }

        // GET: api/<PlanController>
        [HttpGet("getCartItems")]
        public IEnumerable<CartModel> Get()
        {
            return _context.CartModels.ToList();
        }

        // GET api/<PlanController>/5
        [HttpGet("getCartItem/{id}")]
        public IActionResult GetCart(string id)
        {
            var plan = _context.CartModels.Find(id);
            if (plan != null)
            {
                return Ok(new { StatusCode = 200, Plans = plan });
            }
            return NotFound(new
            {
                StatusCode = 400,
                Message = "Cart Not Found"
            });
        }

        // POST api/<PlanController>
        //  [Route("addPlan")]
        [HttpPost("addCartItem")]
        public IActionResult Post([FromBody] CartModel plan)
        {
            if (plan == null)
            {
                return BadRequest();
            }
            else
            {
                _context.CartModels.Add(plan);
                _context.SaveChanges();
                return Ok(new

                {
                    StatusCode = 200,
                    Message = "Cart Added Successufully"
                });
            }
        }

        // PUT api/<PlanController>/5
        //  [Route("editPlan")]
        [HttpPut("editCartItem/{id}")]
        public IActionResult Put(string id, [FromBody] CartModel plan)
        {
            if (plan == null)
            {
                return BadRequest();
            }
            else
            {
                var user = _context.CartModels.AsNoTracking().FirstOrDefault(e => e.CartItemId == plan.CartItemId);
                if (user == null)
                
                {
                    return NotFound(new
                    {
                        StatusCode = 404,
                        Message = "Cart not found",
                    });
                }
                else
                {
                    _context.Entry(plan).State = EntityState.Modified;
                    _context.SaveChanges();
                    return Ok(new
                    {
                        StatusCode = 200,
                        Message = "Cart Updated Successfully"
                    });
                }
            }
        }

        // DELETE api/<PlanController>/5
        //  [Route("deletePlan")]
        [HttpDelete("deleteCartItem/{id}")]
        public IActionResult Delete(string id)
        {
            var user = _context.CartModels.Find(id);
            if (user == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "Cart not found",
                });
            }
            else
            {
                _context.CartModels.Remove(user);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Cart Deleted"
                });
            }
        }
    
    }
}
