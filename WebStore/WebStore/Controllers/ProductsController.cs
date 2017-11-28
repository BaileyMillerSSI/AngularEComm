using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebStore.Models;

namespace WebStore.Controllers
{
    /// <summary>
    /// The main entry point for retrieving the current inventory
    /// </summary>
    [Route("api/products")]
    public class ProductsController: Controller
    {

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return await GetRange(0, 25);
        }

        [HttpGet]
        [Route("Range")]
        public async Task<IActionResult> GetRange([FromQuery]int start, [FromQuery] int end = 25)
        {
//#if (RELEASE)
//            var random = new Random();
//            await Task.Delay(TimeSpan.FromSeconds(random.Next(5, 10))); 
//#endif
            return Ok(await GetProductsAsync(start, end));
        }

        public async Task<List<Product>> GetProductsAsync(int start, int end)
        {
            return await Task.Run(()=> 
            {
                var prods = new List<Product>();

                var random = new Random();

                for (int i = start; i < end; i++)
                {
                    var hashedId = Guid.NewGuid().ToString();
                prods.Add(new Product()
                {
                    Id = hashedId.Substring(0, hashedId.IndexOf('-')),
                        Title = $"Product: {i + 1}",
                        StockCount = random.Next(0, 10),
                        Price = double.Parse($"{random.Next(1, 10)}.{random.Next(0, 99)}"),
                        IsSaleItem = (random.Next(0, 10) % 2 == 0 ? true: false),
                        Url = $"https://placeimg.com/380/180/any?random={i}"
                    });
                }

                return prods;

            });
        }


    }
}
