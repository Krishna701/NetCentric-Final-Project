using System;
using EGovProject.Areas.Identity.Data;
using EGovProject.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

[assembly: HostingStartup(typeof(EGovProject.Areas.Identity.IdentityHostingStartup))]
namespace EGovProject.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
                services.AddDbContext<LoginRegistrationDbContext>(options =>
                    options.UseSqlServer(
                        context.Configuration.GetConnectionString("LoginRegistrationDbContextConnection")));

                services.AddDefaultIdentity<LoginRegistrationUser>(options => options.SignIn.RequireConfirmedAccount = true)
                    .AddEntityFrameworkStores<LoginRegistrationDbContext>();
            });
        }
    }
}