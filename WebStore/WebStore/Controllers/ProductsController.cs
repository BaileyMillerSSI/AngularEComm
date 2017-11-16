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
    [Route("api/[controller]")]
    public class ProductsController: Controller
    {

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await GetProductsAsync());
        }



        public async Task<List<Product>> GetProductsAsync()
        {
            return await Task.Run(()=> 
            {
                var prods = new List<Product>();

                var random = new Random();

                for (int i = 0; i < random.Next(25, 50); i++)
                {
                    prods.Add(new Product()
                    {
                        ProductId = i,
                        Title = $"Product: {i + 1}",
                        StockCount = random.Next(0, 10),
                        Price = double.Parse($"{random.Next(1, 10)}.{random.Next(0, 99)}"),
                        IsSaleItem = (random.Next(0, 10) % 2 == 0 ? true: false)
                    });
                }

                return prods;

            });
        }


    }
}
