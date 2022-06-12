using EGovProject.Models;
using EGovProject.Models.ViewModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EGovProject
{
    public class EgovernanceDB:DbContext
    {
        public EgovernanceDB(DbContextOptions<EgovernanceDB> options)
          : base(options)
        {
        }
        public DbSet<Birth> Birth { get; set; }
        public DbSet<BirthModel> BirthModel { get; set; }
        public DbSet<Death>Deaths{ get; set; }
        public DbSet<DeathModel> DeathModel { get; set; }
        public DbSet<ComplainModel> ComplainModel { get; set; }
        public DbSet<Complain> Complains { get; set; }
        public DbSet<PollModel> PollModel { get; set; }
        public DbSet<Poll> Polls { get; set; }
        public DbSet<ProblemModel> ProblemModel { get; set; }
        public DbSet<Problem> Problems { get; set; }
        public DbSet<ContactModel> ContactModel { get; set; }
        public DbSet<Contact> Contacts { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }

    }
}
