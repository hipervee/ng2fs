import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { NavbarModule } from './shared';
import { HomeModule } from './home/home.module';
import { TodolistModule } from './todolist/todolist.module';
import { EmployeeListModule } from './employeelist/index';
import { ToastyModule } from 'ng2-toasty';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NavbarModule,
        HomeModule,
        TodolistModule,
        EmployeeListModule,
        routing,
        ToastyModule.forRoot()
    ],
    providers: [ APP_PROVIDERS, appRoutingProviders ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
