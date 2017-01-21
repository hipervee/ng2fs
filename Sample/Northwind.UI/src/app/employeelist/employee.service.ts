import { Injectable } from '@angular/core';
import {IGrid } from '../shared/models/grid.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {
    private _apiUrl: string = 'http://localhost/api/employee/GetEmployees';
    constructor(private _http: Http) { }

    getEmployees(filter: Object): Observable<IGrid> {
        return this._http.post(this._apiUrl, filter)
            .map((response: Response) => <IGrid>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}
