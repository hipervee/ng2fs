import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'as-employeelist',
    templateUrl: 'employeelist.html'
})

export class EmployeeListComponent {
    public employees: any[];
}
