"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var movies_service_1 = require("./movies/movies.service");
var employee_service_1 = require("./employee/employee.service");
require("rxjs/Rx");
var AppComponent = (function () {
    function AppComponent() {
        this.welcomeMessage = "Welcome to your first component!";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "<h1>{{welcomeMessage}}</h1>\n                <div>\n                <mm-employees></mm-employees>\n                </div>\n                ",
            providers: [movies_service_1.MovieService, employee_service_1.EmployeeService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map