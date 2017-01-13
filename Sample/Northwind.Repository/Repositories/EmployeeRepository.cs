using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Northwind.Entities.Models;
using Northwind.Repository.Models;
using Repository.Pattern.Repositories;

namespace Northwind.Repository.Repositories
{
    public static class EmployeeRepository
    {
        public static IEnumerable<Employee> GetEmployeesWhoProcessedOrder(this IRepository<Employee> repository, int productId)
        {
            var employees = repository.GetRepository<Employee>().Queryable();
            var products = repository.GetRepository<Product>().Queryable();
            var orders = repository.GetRepository<Order>().Queryable();
            var orderDetails = repository.GetRepository<OrderDetail>().Queryable();

            var query = orders.Join(orderDetails,
                (Order o) => o.OrderID,
                (OrderDetail od) => od.OrderID,
                (o, od) => new
                {
                    OrderId = o.OrderID,
                    ProductId = od.ProductID,
                    EmployeeId = o.EmployeeID
                })
                .Join(products,
                od => od.ProductId,
                p => p.ProductID, (od, p) => new
                {
                    EmployeeId = od.EmployeeId,
                    ProductId = od.ProductId,
                })
                .Join(employees, k => k.EmployeeId, e => e.EmployeeID, (k, e) => new
                {
                    ProductId = k.ProductId,
                    EmployeeId = e.EmployeeID,
                    EmployeeName = e.FirstName + " " + e.LastName,
                    Employee = e
                })
                .Where(z => z.ProductId == productId)
                .Select(s => s.Employee)
                .GroupBy(g => g.EmployeeID)
                .Select(s => s.FirstOrDefault())
                .OrderBy(o => o.EmployeeID);

            return query.ToList();
        }
    }
}
