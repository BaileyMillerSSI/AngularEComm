using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebStore.Models
{
    public class Product
    {
        public string Id { get; set; }
        public String Title { get; set; }
        public Double Price { get; set; }
        public int StockCount { get; set; }
        public bool IsSaleItem { get; set; }
        public String Url { get; set; }
    }
}
