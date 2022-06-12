using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EGovProject.Areas.Identity.Data;
using EGovProject.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace EGovProject.Data
{
    public class LoginRegistrationDbContext : IdentityDbContext<LoginRegistrationUser>
    {
        public LoginRegistrationDbContext(DbContextOptions<LoginRegistrationDbContext> options)
            : base(options)
        {
        }
     
      
    }
}
