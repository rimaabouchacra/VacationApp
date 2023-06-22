using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using vacation_app_server.Models;

namespace vacation_app_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VacationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public VacationController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Vacation> GetAllVacations()
        {
            var vacations = _context.Vacations.ToList();
            return vacations;
        }

        [HttpGet("{id}")]
        public ActionResult<Vacation> GetVacationById(int id)
        {
            var vacation = _context.Vacations.Find(id);
            if (vacation == null)
            {
                return NotFound();
            }
            return vacation;
        }

        [HttpPost]
        public ActionResult<Vacation> CreateVacation([FromBody] Vacation vacation)
        {
            if (ModelState.IsValid)
            {
                _context.Vacations.Add(vacation);
                _context.SaveChanges();
                return CreatedAtAction(nameof(GetVacationById), new { id = vacation.Id }, vacation);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateVacation(int id, [FromBody] Vacation updatedVacation)
        {
            var vacation = _context.Vacations.Find(id);
            if (vacation == null)
            {
                return NotFound();
            }

            vacation.Description = updatedVacation.Description;
            vacation.StartDate = updatedVacation.StartDate;
            vacation.EndDate = updatedVacation.EndDate;
            vacation.Duration = updatedVacation.Duration;
            vacation.UserId = updatedVacation.UserId;

            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteVacation(int id)
        {
            var vacation = _context.Vacations.Find(id);
            if (vacation == null)
            {
                return NotFound();
            }

            _context.Vacations.Remove(vacation);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
