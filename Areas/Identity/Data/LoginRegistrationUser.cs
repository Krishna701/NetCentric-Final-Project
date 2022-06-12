using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace EGovProject.Areas.Identity.Data
{
    // Add profile data for application users by adding properties to the LoginRegistrationUser class
    public class LoginRegistrationUser : IdentityUser
    {
        [PersonalData]
      
        [Column(TypeName="nvarchar(100)")]
        public string FirstName { get; set; }
        [PersonalData]
      
        
        [Column(TypeName = "nvarchar(100)")]
        public string LastName { get; set; }
        public string Fullname { get { return string.Format("{0} {1}", FirstName, LastName); } }

        [Column(TypeName = "nvarchar(100)")]
        public string Address { get; set; }
       
        [Column(TypeName = "nvarchar(MAX)")]
        public string ProfilePicture { get; set; }

    }
}
