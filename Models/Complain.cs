using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EGovProject.Models
{
    public class Complain
    {
       [Key]
        public int ComplainId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Type { get; set; }
        public DateTime ComplainDate { get; set; }
        public string Details { get; set; }
    }
}
