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
    public class ContactController : Controller
    {
        private readonly ILogger<ContactController> _logger;

        private IConfiguration _iConfig;
        private IWebHostEnvironment _env;
        private EgovernanceDB context;
        public ContactController(ILogger<ContactController> logger, IConfiguration iConfig, IWebHostEnvironment env, EgovernanceDB _context)
        {
            _logger = logger;
            _iConfig = iConfig;
            _env = env;
            context = _context;
        }
        public IActionResult Contact()
        {
            return View();
        }
        public IActionResult ContactN()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Contact (ContactModel contact)
        {

            ContactModel row= new ContactModel();
            row.Id = contact.Id;
            row.Name = contact.Name;
            row.Email = contact.Email;
            row.Type = contact.Type;
            row.Subject = contact.Subject;
            row.Phone = contact.Phone;
            row.ContactDate = DateTime.Now;
            row.Message = contact.Message;
            context.Add(row);
            context.Entry(row).State = EntityState.Added;
            context.SaveChanges();
            return View();



        }
        public IActionResult ContactList()
        {
            List<ContactModel> contacts = context.ContactModel.Select(x => new ContactModel()
            {
                Id = x.Id,
                Type = x.Type,
                Message=x.Message,
                Phone=x.Phone,
                Subject=x.Subject,
                ContactDate=x.ContactDate,
                Email=x.Email,
                Name = x.Name


            }
            ).ToList();
            return View(contacts);

        }
    }
}
