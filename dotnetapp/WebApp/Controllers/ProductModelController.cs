using Microsoft.AspNetCore.Mvc;
using Amazepack_Project.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Amazepack_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductModelController : ControllerBase
    {
        private readonly Amazepack_ProjectContext _context;
        public ProductModelController(Amazepack_ProjectContext context)
        {
            _context = context;
        }


        // GET: api/<PlanController>
        [HttpGet]
        [Route("admin")]
        public IEnumerable<ProductModel> Get()
        {
            return _context.ProductModels.ToList();
        }

        // GET api/<PlanController>/5
        [HttpGet("admin/getProduct/{id}")]
        public IActionResult GetProduct(string id)
        {
            var plan = _context.ProductModels.Find(id);
            if (plan != null)
            {
                return Ok(new { StatusCode = 200, Plans = plan });
            }
            return NotFound(new
            {
                StatusCode = 400,
                Message = "Product Not Found"
            });
        }

        // POST api/<PlanController>
        //  [Route("addPlan")]
        [HttpPost]
        [Route("admin/addproducts")]

        public IActionResult Post([FromBody] ProductModel plan)
        {
            if (plan == null)
            {
                return BadRequest();
            }
            else
            {
                _context.ProductModels.Add(plan);
                _context.SaveChanges();
                return Ok(new

                {
                    StatusCode = 200,
                    Message = "Product Added Successufully"
                });
            }
        }

        // PUT api/<PlanController>/5
        //  [Route("editPlan")]
        [HttpPut]
        [Route("admin/productEdit/{id}")]

        public IActionResult Put(string id, [FromBody] ProductModel plan)
        {
            if (plan == null)
            {
                return BadRequest();
            }
            else
            {
                var user = _context.ProductModels.AsNoTracking().FirstOrDefault(e => e.ProductId == plan.ProductId);
                if (user == null)
                {
                    return NotFound(new
                    {
                        StatusCode = 404,
                        Message = "Product not found",
                    });
                }
                else
                {
                    _context.Entry(plan).State = EntityState.Modified;
                    _context.SaveChanges();
                    return Ok(new
                    {
                        StatusCode = 200,
                        Message = "Product Updated Successfully"
                    });
                }
            }
        }

        // DELETE api/<PlanController>/5
        //  [Route("deletePlan")]
        [HttpDelete]
        [Route("admin/delete/{id}")]

        public IActionResult Delete(string id)
        {
            var user = _context.ProductModels.Find(id);
            if (user == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "Product not found",
                });
            }
            else
            {
                _context.ProductModels.Remove(user);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Product Deleted"
                });
            }
        }
        // GET: api/<ProductModelController>
    }
}
