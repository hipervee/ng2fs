import {Injectable} from "@angular/core";
import {IMovie} from "./movie";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MovieService {
    private _movieUrl: string = "api/movies/movies.json";
    constructor(private _http: Http) { }

    getMovies(): Observable<IMovie[]> {
       return this._http.get(this._movieUrl)
       .map((response: Response) => <IMovie[]>response.json())
       .do(data => console.log("All: " + JSON.stringify(data)))
       .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || "Server Error");
    }
}