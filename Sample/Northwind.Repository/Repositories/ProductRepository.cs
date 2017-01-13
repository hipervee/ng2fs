using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Northwind.Entities.Models;
using Northwind.Repository.Models;
using Repository.Pattern.Repositories;

namespace Northwind.Repository.Repositories
{
    public static class ProductRepository
    {
        public static IEnumerable<ProductOrderCount> GetProductsWithOrderCount(this IRepository<Product> repository)
        {
            var products = repository.GetRepository<Product>().Queryable();
            var orderDetails = repository.GetRepository<OrderDetail>().Queryable();

            var orderQuery = orderDetails.GroupBy(x => x.ProductID).Select(y => new
            {
                ProductId = y.Key,
                Count = y.Count()
            });

            var query = products.Join(orderQuery,
                p => p.ProductID,
                o => o.ProductId,
                (p, o) =>
                new ProductOrderCount()
                {
                    OrderCount = o.Count,
                    ProductId = p.ProductID,
                    ProductName = p.ProductName
                });

            return query.AsEnumerable();
        }

        public static IEnumerable<ProductOrderCount> Top3ProductsWithMoreOrders(this IRepository<Product> repository)
        {
            var top3products = repository.GetProductsWithOrderCount()
                .OrderByDescending(x => x.OrderCount)
                .Take(3)
                .ToList();

            return top3products;
        }
    }
}
