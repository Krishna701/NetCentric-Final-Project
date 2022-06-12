using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EGovProject.Models.ViewModel
{
    public class ProblemModel
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Type { get; set; }
        public string Address { get; set; }
        public DateTime ProblemDate { get; set; }
        public string Details { get; set; }
    }
}
