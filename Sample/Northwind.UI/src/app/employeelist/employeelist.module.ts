import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './index';
import { HttpModule} from '@angular/http';
import { PaginationModule } from '../shared/pagination/index';



@NgModule({
    declarations: [
        EmployeeListComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpModule,
        PaginationModule
    ],
    exports: [
        EmployeeListComponent
    ]
})

export class EmployeeListModule {

}
