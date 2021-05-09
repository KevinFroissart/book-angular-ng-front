import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDataComponent } from './book-data/book-data.component';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    BookDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    FormsModule,
    HttpClientModule,
    DialogModule,
    BrowserAnimationsModule,
	ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
