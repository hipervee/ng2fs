import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './index';
import { HttpModule} from '@angular/http';
import { PaginationModule } from '../shared/pagination/index';
import { NgGridModule } from 'angular2-grid';
import { DataTableModule } from 'angular-2-data-table';



@NgModule({
    declarations: [
        EmployeeListComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        CommonModule,
        HttpModule,
        PaginationModule,
        NgGridModule,
        DataTableModule
    ],
    exports: [
        EmployeeListComponent
    ]
})

export class EmployeeListModule {

}
