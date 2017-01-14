import {Component, OnInit} from "@angular/core";
import { IMovie} from "./movie";


import { MovieService } from "./movies.service";

@Component({
    selector: "mm-movies",
    templateUrl: "./movie-list.component.html",
    styleUrls: ["./movie-list.component.css"]
})

export class MovieListComponent implements OnInit {
    title: string = 'Movie List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    seePoster: boolean = false;
    movies: IMovie[];
    errorMessage: string;

    constructor(private _movieService: MovieService) {

    }

    toggleImage(): void {
        this.seePoster = !this.seePoster;
    };

    ngOnInit(): void {
        this._movieService.getMovies()
            .subscribe(movies => this.movies = movies, 
            error => this.errorMessage = error);
    }

    onRatingClicked(message: string) {
        this.title = "Rating Clicked : " + message;
    }
}