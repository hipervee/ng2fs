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

        public EmployeeController(IUnitOfWorkAsync unitOfWorkAsync, IEmployeeService employeeService)
        {
            _unitOfWorkAsync = unitOfWorkAsync;
            _employeeService = employeeService;
        }

        [HttpPost]
        public GridResponse GetEmployees(GridRequest request)
        {
            var data = _employeeService.Queryable()
                .OrderBy(o => o.EmployeeID)
                .Skip(request.Offset)
                .Take(request.Limit)
                .ToList();

            var count = _employeeService.Queryable().Count();
            var gridResponse = new GridResponse()
            {
                Data = data,
                TotalRecords = count
            };
            return gridResponse;
        }
    }

    public class GridRequest
    {
        public int Offset { get; set; }
        public int Limit { get; set; }
        public string SortBy { get; set; }
        public string SortAsc { get; set; }
    }

    public class GridResponse
    {
        public object Data { get; set; }
        public int TotalRecords { get; set; }
    }
}