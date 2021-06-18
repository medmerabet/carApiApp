using Car.API;
using Car.API.Controllers;
using Car.API.Models;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Car.Test
{
    public class Tests
    {
        private DbContextOptions<CarDbContext> dbContextOptions = new DbContextOptionsBuilder<CarDbContext>()
        .UseInMemoryDatabase(databaseName: "PrimeDb")
        .Options;
        private BrandsController controller;


        private void SeedDb()
        {
            using var context = new CarDbContext(dbContextOptions);
            var brands = new List<Brand>
            {
                new Brand { ID = 1, Name = "Audi", Image = ""},
                new Brand { ID = 2, Name = "BMW", Image = ""},
                new Brand { ID = 3, Name = "Renault", Image = ""}
            };
            context.AddRange(brands);
            context.SaveChanges();
        }

        [OneTimeSetUp]
        public void Setup()
        {
            SeedDb();

            controller = new BrandsController(new CarDbContext(dbContextOptions));
        }

        [Test]
        public async Task Get_Brands()
        {
            using var context = new CarDbContext(dbContextOptions);
            var brands = (await controller.GetBrands()).Value.ToList();

            brands.Count.Should().Be(3);
            brands.All(r => r.Image == "").Should().BeTrue();
            brands.All(r => r.Name != "").Should().BeTrue();
        }

        [Test]
        public async Task Get_Brand()
        {
            using var context = new CarDbContext(dbContextOptions);
            var brand = (await controller.GetBrand(1)).Value;
            var nobrand = (await controller.GetBrand(18)).Value;

            brand.Should().NotBeNull();
            nobrand.Should().BeNull();
        }

        [Test]
        public async Task Post_Brand()
        {
            var brand = new Brand
            {
                Name = "FIAT",
                Image = "fiat.jpg"
            };

            using var context = new CarDbContext(dbContextOptions);
            var result = await controller.PostBrand(brand);

            
            var addBrand = await context.Brands.LastAsync();

            addBrand.Should().NotBeNull();
            addBrand.ID.Should().BePositive();
            addBrand.Name.Should().BeEquivalentTo(brand.Name);
        }
    }
}
