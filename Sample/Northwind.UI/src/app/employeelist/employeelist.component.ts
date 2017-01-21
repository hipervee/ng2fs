import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';


@Component({
    moduleId: module.id,
    selector: 'as-employeelist',
    templateUrl: 'employeelist.html',
    providers: [EmployeeService],
    styleUrls: [
        'employeelist.css'
    ]
})

export class EmployeeListComponent implements OnInit {
    public employees: any = {};
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

        this.employees.config = this.getGirdConfig();

        this._employeeService.getEmployees(this.employeeFilter)
            .subscribe((response) => {
                this.employees.data = response.Data;
            },
            error => this.errorMessage = error);
    }

    getGirdConfig(): any {
        return {

        };
    }
}
