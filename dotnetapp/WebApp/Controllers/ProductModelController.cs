
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
