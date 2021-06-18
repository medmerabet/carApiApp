using Car.API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Car.API
{
    public class CarDbContext : DbContext
    {

        public CarDbContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.HasDefaultSchema("api-formation");
        }

        public DbSet<Car.API.Models.Car> Cars { get; set; }

        public DbSet<Brand> Brands { get; set; }
    }
}
