import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './index';
import { HttpModule} from '@angular/http';
import { PaginationModule } from '../shared/pagination/index';
import { DataTableModule } from 'angular-2-data-table';
import { ToastyModule } from 'ng2-toasty';

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
        DataTableModule,
        ToastyModule.forRoot()
    ],
    exports: [
        EmployeeListComponent
    ]
})

export class EmployeeListModule {

}
