import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'angular-2-data-table';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        CommonModule,
        HttpModule,
        DataTableModule
    ],
    exports: [
        FormsModule,
        BrowserModule,
        CommonModule,
        HttpModule,
        DataTableModule
    ]
})

export class ACCommonModule {

}
