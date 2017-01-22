import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';
import { EmployeeService } from './employee.service';
import { GridResponse } from '../shared/models/grid.model';
import { Employee } from './employee.model';


@Component({
    moduleId: module.id,
    selector: 'as-employeelist',
    templateUrl: 'employeelist.html',
    providers: [EmployeeService],
    styleUrls: [
        'employeelist.css', 'films.css'
    ]
})

export class EmployeeListComponent implements OnInit {
    public employees: GridResponse<Employee> = new GridResponse<Employee>();
    public errorMessage;
    employeeResource: any = {};

    translations = <DataTableTranslations>{
        indexColumn: 'Index column',
        expandColumn: 'Expand column',
        selectColumn: 'Select column',
        paginationLimit: 'Max results',
        paginationRange: 'Result range'
    };

    @ViewChild(DataTable) detailsTable;

    private _employeeService;

    constructor(employeeService: EmployeeService) {
        this._employeeService = employeeService;
    }

    ngOnInit(): void {
        console.log('Inside Init');
    }

    getEmployees(params) {
        this._employeeService.getEmployees(params)
            .subscribe((response) => {
                this.employees = response;
                console.log(this.employees.data);
                this.employeeResource = new DataTableResource(this.employees.data);
            },
            error => this.errorMessage = error);
    }
}
