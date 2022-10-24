import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {

  @Input()
  book?: Book;

  @Output()
  rateUp = new EventEmitter<Book>();

  @Output()
  rateDown = new EventEmitter<Book>();

  @Output()
  edit = new EventEmitter<Book>()

  @Input()
  isRateUpAllowed = (b: Book) => true;

  @Input()
  isRateDownAllowed = (b: Book) => true;

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

  doEdit() {
    if (this.book) {
      this.edit.next(this.book);
    }
  }

  log() {
    console.log(+new Date());
  }
}
