import { Injectable } from '@angular/core';
import { GridResponse } from '../shared/models/grid.model';
import { Http, Response } from '@angular/http';
import { DataTableParams } from 'angular-2-data-table';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

function paramsToQueryString(params: DataTableParams) {
    let result = [];

    if (params.offset != null) {
        result.push(['_start', params.offset]);
    }
    if (params.limit != null) {
        result.push(['_limit', params.limit]);
    }
    if (params.sortBy != null) {
        result.push(['_sort', params.sortBy]);
    }
    if (params.sortAsc != null) {
        result.push(['_order', params.sortAsc ? 'ASC' : 'DESC']);
    }

    return result.map(param => param.join('=')).join('&');
}

@Injectable()
export class EmployeeService {
    private _apiUrl: string = 'http://localhost/api/employee/GetEmployees';
    constructor(private _http: Http) { }

    getEmployees(params: DataTableParams): Observable<GridResponse> {
        let filter = {
            skip: params.offset,
            take: params.limit
        };
        return this._http.post(this._apiUrl, filter)
            .map((response: Response) => <GridResponse>response.json())
            .catch(this.handleError);
    }

    query(params: DataTableParams) {
        console.log(params);
        return this._http.get(this._apiUrl + '?' + paramsToQueryString(params)).toPromise()
            .then((resp: Response) => ({
                items: resp.json(),
                count: Number(resp.headers.get('X-Total-Count'))
            }));
    }
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}
