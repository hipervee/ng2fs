import { Component } from "@angular/core";
import { MovieService } from "./movies/movies.service";
import { EmployeeService } from "./employee/employee.service";
import "rxjs/Rx";

@Component({
    selector: "my-app",
    template: `<h1>{{welcomeMessage}}</h1>
                <div>
                <mm-employees></mm-employees>
                </div>
                `,

    providers: [MovieService, EmployeeService]
})

export class AppComponent {
    welcomeMessage: string = "Welcome to your first component!";
}