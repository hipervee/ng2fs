using Northwind.Entities.Models;
using Repository.Pattern.Repositories;
using Service.Pattern;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Northwind.Service
{
    public interface IEmployeeService : IService<Employee>
    {
        
    }

    public class EmployeeService : Service<Employee>, IEmployeeService
    {
        private readonly IRepositoryAsync<Employee> _repository;

        public EmployeeService(IRepositoryAsync<Employee> repository) : base(repository)
        {
            _repository = repository;
        }
    }
}
