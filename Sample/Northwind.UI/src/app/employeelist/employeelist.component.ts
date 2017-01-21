import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';
import { EmployeeService } from './employee.service';


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
    public employees: any = {
        data: [],
        count: 0
    };
    public errorMessage;
    public employeeFilter;
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
        this.employeeFilter = {
            'Skip': 0,
            'Take': 5
        };
    }

    reloadFilms(params) {
        this._employeeService.getEmployees(this.employeeFilter)
            .subscribe((response) => {
                this.employees.data = response.Data;
                this.employees.count  = response.Data.length;
                this.employeeResource = new DataTableResource(this.employees.data);
            },
            error => this.errorMessage = error);
    }
}
