import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './index';

@NgModule({
    declarations: [
        EmployeeListComponent
    ],
    imports: [
        FormsModule,
        BrowserModule
    ],
    exports: [
        EmployeeListComponent
    ]
})

export class EmployeeListModule {

}
