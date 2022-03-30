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
    public class ReviewModelController : ControllerBase

    {
        private readonly Amazepack_ProjectContext _context;
        public ReviewModelController(Amazepack_ProjectContext context)
        {
            _context = context;
        }

        // GET: api/<PlanController>
        [HttpGet("getReviews")]
        public IEnumerable<ReviewModel> Get()
        {
            return _context.ReviewModels.ToList();
        }

        // GET api/<PlanController>/5
        [HttpGet("getReview/{id}")]
        public IActionResult GetCart(string id)
        {
            var plan = _context.ReviewModels.Find(id);
            if (plan != null)
            {
                return Ok(new { StatusCode = 200, Plans = plan });
            }
            return NotFound(new
            {
                StatusCode = 400,
                Message = "Review Not Found"
            });
        }

        // POST api/<PlanController>
        //  [Route("addPlan")]
        [HttpPost("addReview")]
        public IActionResult Post([FromBody] ReviewModel plan)
        {
            if (plan == null)
            {
                return BadRequest();
            }
            else
            {
                _context.ReviewModels.Add(plan);
                _context.SaveChanges();
                return Ok(new

                {
                    StatusCode = 200,
                    Message = "Review Added Successufully"
                });
            }
        }
        
        // PUT api/<PlanController>/5
        //  [Route("editPlan")]
        [HttpPut("editReview/{id}")]
        public IActionResult Put(string id, [FromBody] ReviewModel plan)
        {
            if (plan == null)
            {
                return BadRequest();
            }
            else
            {
                var user = _context.ReviewModels.AsNoTracking().FirstOrDefault(e => e.ReviewId == plan.ReviewId);
                if (user == null)
                
                {
                    return NotFound(new
                    {
                        StatusCode = 404,
                        Message = "Review not found",
                    });
                }
                else
                {
                    _context.Entry(plan).State = EntityState.Modified;
                    _context.SaveChanges();
                    return Ok(new
                    {
                        StatusCode = 200,
                        Message = "Review Updated Successfully"
                    });
                }
            }
        }

        // DELETE api/<PlanController>/5
        //  [Route("deletePlan")]
        [HttpDelete("deleteReview/{id}")]
        public IActionResult Delete(string id)
        {
            var user = _context.ReviewModels.Find(id);
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
                _context.ReviewModels.Remove(user);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Review Deleted"
                });
            }
        }
    
    }
}
