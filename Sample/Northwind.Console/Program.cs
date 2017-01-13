using Northwind.Entities.Models;
using Northwind.Service;
using Repository.Pattern.DataContext;
using Repository.Pattern.Ef6;
using Repository.Pattern.Repositories;
using Repository.Pattern.UnitOfWork;
using Northwind.Repository.Repositories;
using System;
namespace Northwind.NConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            using (IDataContextAsync context = new NorthwindContext())
            using (IUnitOfWorkAsync unitOfWork = new UnitOfWork(context))
            {
                //ProductsWithOrderCount(context, unitOfWork);
                //Top3ProductsWithMoreOrders(context, unitOfWork);
                GetEmployeesWhoProcessedOrder(context, unitOfWork);
            }

            Console.Read();
        }

        static void WriteLine(string message)
        {
            Console.WriteLine(message);
        }

        /// <summary>
        /// Get the product name , count of orders processed
        /// </summary>
        /// <param name="context"></param>
        /// <param name="unitOfWork"></param>
        static void ProductsWithOrderCount(IDataContextAsync context, IUnitOfWorkAsync unitOfWork)
        {
            IRepositoryAsync<Product> productrRepository = new Repository<Product>(context, unitOfWork);
            foreach (var item in productrRepository.GetProductsWithOrderCount())
            {
                WriteLine(string.Format("{0} - {1}", item.OrderCount, item.ProductName));
            }
        }

        /// <summary>
        /// Get the top 3 products which has more orders
        /// </summary>
        /// <param name="context"></param>
        /// <param name="unitOfWork"></param>
        static void Top3ProductsWithMoreOrders(IDataContextAsync context, IUnitOfWorkAsync unitOfWork)
        {
            IRepositoryAsync<Product> productrRepository = new Repository<Product>(context, unitOfWork);
            WriteLine(string.Format("{0} - {1} - {2}", "ProductId", "ProductName", "NoOfOrders"));
            WriteLine("-----------------------------------------------------------------------");
            foreach (var item in productrRepository.Top3ProductsWithMoreOrders())
            {
                WriteLine(string.Format("{0} - {1} - {2}", item.ProductId, item.ProductName, item.OrderCount));
            }
        }

        /// <summary>
        /// Get the list of employees who processed the order
        /// </summary>
        /// <param name="context"></param>
        /// <param name="unitOfWork"></param>
        static void GetEmployeesWhoProcessedOrder(IDataContextAsync context, IUnitOfWorkAsync unitOfWork)
        {
            IRepositoryAsync<Employee> employeeRepository = new Repository<Employee>(context, unitOfWork);

            WriteLine("Employees who processed Product ID : 3");
            WriteLine("-----------------------------------------------------------------------");
            foreach (var item in employeeRepository.GetEmployeesWhoProcessedOrder(3))
            {
                WriteLine(string.Format("{0} - {1}", item.EmployeeID, item.FirstName + " " + item.LastName));
            }
        }
    }
}
