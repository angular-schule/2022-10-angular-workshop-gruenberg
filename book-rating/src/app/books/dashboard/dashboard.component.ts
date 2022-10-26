import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';

import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { selectBooks, selectLoading } from '../store/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
   // VORSICHT: BUG sobald wir HTTP einführen!
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  books$ = this.store.select(selectBooks);
  loading$ = this.store.select(selectLoading);

  selectedBook?: Book;

  constructor(private store: Store) {
    // this.bs.getBooks().subscribe(books => this.books = books)
  }

  doRateUp(book: Book) {
    // const ratedBook = this.br.rateUp(book);
    // // const ratedBook = {
    // //   ...book,
    // //   rating: book.rating < 5 ? book.rating + 1 : 5
    // // }
    // this.updateAndSortBooks(ratedBook);
  }

  doRateDown(book: Book) {
    // const ratedBook = this.br.rateDown(book);
    // this.updateAndSortBooks(ratedBook);
  }

  updateAndSortBooks(ratedBook: Book) {
    // this.books = this.books
    //   .map(b => ratedBook.isbn === b.isbn ? ratedBook : b)
    //   .sort((a, b) => b.rating - a.rating)
  }

  addBook(newBook: Book) {
    // this.books = [...this.books, newBook];
  }

  changeBook(changeBook: Book): void {
    // this.updateAndSortBooks(changeBook);
    // this.selectedBook = undefined;
  }

  changeToEditMode(book: Book): void {
    // this.selectedBook = book;
  }
}
