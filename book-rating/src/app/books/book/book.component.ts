import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input()
  book?: Book;

  @Output()
  rateUp = new EventEmitter<Book>();

  @Output()
  rateDown = new EventEmitter<Book>();

  doRateUp() {
    if (this.book) {
      this.rateUp.next(this.book);
    }
  }

  doRateDown() {
    if (this.book) {
      this.rateDown.next(this.book);
    }
  }
}
