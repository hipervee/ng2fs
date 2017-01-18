import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PagerComponent } from './pagination.component';

@NgModule({
    declarations: [PagerComponent],
    exports: [PagerComponent],
    imports: [BrowserModule]
})

export class PaginationModule {
}
