using Amazepack_Project.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Amazepack_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderModelController : ControllerBase
    {
        private readonly Amazepack_ProjectContext _context;
        public OrderModelController(Amazepack_ProjectContext context)
        {
            _context = context;
        }

        // GET: api/<PlanController>
        [HttpGet("getOrder")]
        public IEnumerable<OrderModel> Get()
        {
            return _context.OrderModels.ToList();
        }

        // GET api/<PlanController>/5
        [HttpGet("getOrder/{id}")]
        public IActionResult GetOrder(string id)
        {
            var plan = _context.OrderModels.Find(id);
            if (plan != null)
            {
                return Ok(new { StatusCode = 200, Plans = plan });
            }
            return NotFound(new
            {
                StatusCode = 400,
                Message = "Order Not Found"
            });
        }

        // POST api/<PlanController>
        //  [Route("addPlan")]
        [HttpPost("addOrder")]
        public IActionResult Post([FromBody] OrderModel plan)
        {
            if (plan == null)
            {
                return BadRequest();
            }
            else
            {
                _context.OrderModels.Add(plan);
                _context.SaveChanges();
                return Ok(new

                {
                    StatusCode = 200,
                    Message = "Order Added Successufully"
                });
            }
        }
