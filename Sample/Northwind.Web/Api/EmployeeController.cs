using System;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.OData;
using Northwind.Entities.Models;
using Northwind.Service;
using Repository.Pattern.Infrastructure;
using Repository.Pattern.UnitOfWork;

namespace Northwind.Web.Api
{
    public class EmployeeController : ApiController
    {
        private readonly IEmployeeService _employeeService;
        private readonly IUnitOfWorkAsync _unitOfWorkAsync;


        public EmployeeController(
            IUnitOfWorkAsync unitOfWorkAsync,
            IEmployeeService employeeService)
        {
            _unitOfWorkAsync = unitOfWorkAsync;
            _employeeService = employeeService;
        }

        // GET: odata/Customers
        [HttpGet]
        public IQueryable<Employee> Get()
        {
            return _employeeService.Queryable();
        }


    }

    public interface IGridFilterRequest
    {
        int skip { get; set; }
        int take { get; set; }
    }

    public class GridFilterRequest : IGridFilterRequest
    {
        public int skip { get; set; }
        public int take { get; set; }
    }

    public class GridResponse
    {
        public int totalRecords { get; set; }
        public int currentPage { get; set; }
        public int pageSize { get; set;  }
    }
}