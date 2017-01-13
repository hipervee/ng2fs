import {Component} from "@angular/core";
import { MovieListComponent } from "./movies/movie-list.component";
import { EmployeeListComponent } from "./employee/employee-list.component";
import { MovieService } from "./movies/movies.service";
import { EmployeeService } from "./employee/employee.service";
import {HTTP_PROVIDERS} from "@angular/http";
import "rxjs/Rx";

@Component({
    selector: "my-app",
    template: `<h1>{{welcomeMessage}}</h1>
                <div>
                <mm-employees></mm-employees>
                </div>
                `,
    directives: [MovieListComponent, EmployeeListComponent],
    providers: [MovieService, EmployeeService, HTTP_PROVIDERS]
})

export class AppComponent {
    welcomeMessage: string = "Welcome to your first component!";
}