import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee.model';
import { EmployeeService } from './employee.service';


@Component({
    moduleId: module.id,
    selector: 'as-employeelist',
    templateUrl: 'employeelist.html',
    providers: [EmployeeService]
})

export class EmployeeListComponent implements OnInit {
    public employees: IEmployee[];
    public errorMessage;
    private _employeeService;

    constructor(employeeService: EmployeeService) {
        this._employeeService = employeeService;
    }

    ngOnInit(): void {
        this._employeeService.getEmployees()
            .subscribe(employees => this.employees = employees,
            error => this.errorMessage = error);
    }
}
