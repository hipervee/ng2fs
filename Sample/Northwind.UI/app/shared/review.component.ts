import {Component, OnChanges, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "md-review",
    templateUrl: "./review.component.html",
    styleUrls: ["./review.component.css"]
})
export class ReviewComponent implements OnChanges {
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    reviewWidth: number;
    ngOnChanges(): void {
        this.reviewWidth = this.rating * 86 / 5;
    }
    OnClick() {
        this.ratingClicked.emit(`this movie got a rating of ${this.rating}`);
    }
}