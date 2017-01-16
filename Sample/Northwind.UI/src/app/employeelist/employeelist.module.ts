import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './index';
import { HttpModule} from '@angular/http';


@NgModule({
    declarations: [
        EmployeeListComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpModule
    ],
    exports: [
        EmployeeListComponent
    ]
})

export class EmployeeListModule {

}
