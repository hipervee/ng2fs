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
var ReviewComponent = (function () {
    function ReviewComponent() {
        this.ratingClicked = new core_1.EventEmitter();
    }
    ReviewComponent.prototype.ngOnChanges = function () {
        this.reviewWidth = this.rating * 86 / 5;
    };
    ReviewComponent.prototype.OnClick = function () {
        this.ratingClicked.emit("this movie got a rating of " + this.rating);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ReviewComponent.prototype, "rating", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ReviewComponent.prototype, "ratingClicked", void 0);
    ReviewComponent = __decorate([
        core_1.Component({
            selector: "md-review",
            templateUrl: "app/shared/review.component.html",
            styleUrls: ["app/shared/review.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], ReviewComponent);
    return ReviewComponent;
}());
exports.ReviewComponent = ReviewComponent;
//# sourceMappingURL=review.component.js.map