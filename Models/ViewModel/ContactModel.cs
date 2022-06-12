using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EGovProject.Models.ViewModel
{
    public class ContactModel
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        public string Phone { get; set; }
        [Required]
        public string Subject { get; set; }
        public string Type { get; set; }

        public string Email { get; set; }
        [Required]
        public string Message { get; set; }
        public DateTime ContactDate { get; set; }
    }
}
