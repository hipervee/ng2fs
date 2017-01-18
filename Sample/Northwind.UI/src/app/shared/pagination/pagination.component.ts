import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'as-pager',
    templateUrl: 'pagination.html'
})

export class PagerComponent implements OnInit {
    @Input() totalPages: number;
    public pages: any[];
    pager: any;

    ngOnInit() {
        this.pager = {};
        this.pages = new Array(this.totalPages);
        this.createPages();
    }

    createPages() {
        console.log('CreatePages');
        console.log(this.pages);
        this.pages.forEach(function(value, i) {
            console.log(i);
            this.pages[i] = i;
        });
    }
}
