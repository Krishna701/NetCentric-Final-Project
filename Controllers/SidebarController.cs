using EGovProject.Models.ViewModel;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EGovProject.Controllers
{
    public class SidebarController : Controller

    {
        private readonly ILogger<SidebarController> _logger;

        private IConfiguration _iConfig;
        private IWebHostEnvironment _env;
        private EgovernanceDB context;
        public SidebarController(ILogger<SidebarController> logger, IConfiguration iConfig, IWebHostEnvironment env, EgovernanceDB _context)
        {
            _logger = logger;
            _iConfig = iConfig;
            _env = env;
            context = _context;
        }
        public IActionResult FAQ()
         
        {
            return View();
        }
        public IActionResult Complain()

        {
            return View();
        }
        [HttpPost]

        public IActionResult Complain(ComplainModel complain )

        {
            ComplainModel row = new ComplainModel();
            row.ComplainId = complain.ComplainId;
            row.Name = complain.Name;
            row.Type = complain.Type;
            row.ComplainDate = DateTime.Now;
            row.Details= complain.Details;
            context.Add(row);
            context.Entry(row).State = EntityState.Added;
            context.SaveChanges();
            return View();
        }


        public IActionResult ComplainList()
        {
            List<ComplainModel> complains = context.ComplainModel.Select(x => new ComplainModel()
            {
                ComplainId=x.ComplainId,
                ComplainDate=x.ComplainDate,
                Details=x.Details,
                Type=x.Type,
                Name=x.Name
          

            }
            ).ToList();
            return View(complains);

        }


        public IActionResult Problem()
         
        {
            return View();
        }
        [HttpPost]
        public IActionResult Problem(ProblemModel problem)

        {
            ProblemModel row = new ProblemModel();

            row.Id = problem.Id;
            row.Name = problem.Name;
            row.Type = problem.Type;
            row.Address = problem.Address;
            row.ProblemDate = DateTime.Now;
            row.Details = problem.Details;
            context.Add(row);
            context.Entry(row).State = EntityState.Added;
            context.SaveChanges();
            return View();
        }
        public IActionResult ProblemList()
        {
            List<ProblemModel> problems = context.ProblemModel.Select(x => new ProblemModel()
            {
                Id = x.Id,
                Type=x.Type,
                ProblemDate=x.ProblemDate,
                Details=x.Details,
                Address=x.Address,
                Name=x.Name


            }
            ).ToList();
            return View(problems);

        }
    }
}
