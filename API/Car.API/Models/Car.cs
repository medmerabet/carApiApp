using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Car.API.Models
{
    public class Car
    {
        public int ID { get; set; }

        [Required]
        public string Model { get; set; }
        public decimal? Price { get; set; }

        public DateTime? DateOfCirculation { get; set; }

        [ForeignKey("BrandID")]
        public Brand Brand { get; set; }

        public int BrandID { get; set; }
    }
}
