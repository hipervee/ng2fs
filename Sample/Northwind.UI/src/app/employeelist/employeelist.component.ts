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
    public employeeFilter;
    private _employeeService;

    constructor(employeeService: EmployeeService) {
        this._employeeService = employeeService;
    }

    ngOnInit(): void {
        this.employeeFilter = {
            'Skip': 0,
            'Take': 5
        };

        this._employeeService.getEmployees(this.employeeFilter)
            .subscribe((response) => {
                this.employees = response.Data;
            },
            error => this.errorMessage = error);
    }
}
