import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'
import { HttpModule } from '@angular/http';
import { ReviewComponent } from "./shared/review.component";
import { MovieListComponent } from "./movies/movie-list.component";
import { EmployeeListComponent } from "./employee/employee-list.component";
import { MovieFilterPipe } from "./movies/movie-filter.pipe";


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, MovieListComponent, EmployeeListComponent, ReviewComponent, MovieFilterPipe],
    bootstrap: [AppComponent]
})
export class AppModule { }
