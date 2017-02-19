import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTable, DataTableResource } from 'angular-2-data-table';
import { EmployeeService } from './employee.service';
import { GridResponse } from '../shared/models/grid.model';
import { Employee } from './employee.model';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

@Component({
    moduleId: module.id,
    selector: 'as-employeelist',
    templateUrl: 'employeelist.html',
    providers: [EmployeeService, ToastyService]
})

export class EmployeeListComponent implements OnInit {
    public employees: GridResponse<Employee> = new GridResponse<Employee>();
    public errorMessage;
    employeeResource: any = {};

    @ViewChild(DataTable) detailsTable;

    private _employeeService;

    constructor(employeeService: EmployeeService, private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
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

    addToast() {
        // Just add default Toast with title only
        this.toastyService.default('Hi there');
        // Or create the instance of ToastOptions
        let toastOptions: ToastOptions = {
            title: 'My title',
            msg: 'The message',
            showClose: true,
            timeout: 5000,
            theme: 'default',
            onAdd: (toast: ToastData) => {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function(toast: ToastData) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        // Add see all possible types in one shot
        this.toastyService.info(toastOptions);
        this.toastyService.success(toastOptions);
        this.toastyService.wait(toastOptions);
        this.toastyService.error(toastOptions);
        this.toastyService.warning(toastOptions);
    }
}
