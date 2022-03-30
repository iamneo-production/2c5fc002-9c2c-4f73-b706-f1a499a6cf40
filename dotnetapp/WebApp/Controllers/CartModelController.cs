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
