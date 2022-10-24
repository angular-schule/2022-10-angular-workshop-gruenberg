import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookFormComponent } from './book-form/book-form.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    BookFormComponent,
    // und weitere wie RatingComponent, RatingPipe
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
    // HttpClientModule --- NIEMALS HIER
  ]
})
export class BooksModule { }
