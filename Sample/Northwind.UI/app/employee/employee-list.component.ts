import {Component, OnInit} from "@angular/core";
import { IEmployee} from "./employee";
import {EmployeeService} from "./employee.service";

@Component({
    selector: "mm-employees",
    templateUrl: "./employee-list.component.html",
    styleUrls: ["./employee-list.component.css"]
})

export class EmployeeListComponent implements OnInit {
    title: string = 'Employee List';
    employees: IEmployee[];
    errorMessage: string;

    constructor(private _employeeService: EmployeeService) {

    }

    ngOnInit(): void {
        this._employeeService.getEmployees()
            .subscribe(employees => this.employees = employees, 
            error => this.errorMessage = error);
    }
}