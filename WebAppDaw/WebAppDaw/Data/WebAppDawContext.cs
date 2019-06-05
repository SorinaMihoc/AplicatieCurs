using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebAppDaw.Models
{
    public class WebAppDawContext : DbContext
    {
        public WebAppDawContext (DbContextOptions<WebAppDawContext> options)
            : base(options)
        {
        }

        public DbSet<WebAppDaw.Models.Food> Food { get; set; }
    }
}
