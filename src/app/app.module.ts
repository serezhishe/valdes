import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatSortModule} from '@angular/material/sort';
@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponentComponent
  ],
  imports: [
    MatSortModule,
    MatChipsModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    {  provide:
       MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' },
     },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
