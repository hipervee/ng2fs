import { Injectable } from '@angular/core';
import { IEmployee } from './employee.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {
    private _apiUrl: string = 'http://localhost:50000/api/employee';
    constructor(private _http: Http) { }

    getEmployees(): Observable<IEmployee[]> {
       return this._http.get(this._apiUrl)
       .map((response: Response) => <IEmployee[]>response.json())
       .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}
