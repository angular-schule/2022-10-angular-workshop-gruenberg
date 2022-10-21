import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
   // VORSICHT: BUG sobald wir HTTP einführen!
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  constructor(public br: BookRatingService) {
    // setTimeout(() => this.books = [], 3000)
  }

  books: Book[] = [{
    isbn: '000',
    title: 'Angular',
    description: 'Tolles Buch',
    rating: 5
  }, {
    isbn: '111',
    title: 'AngularJS',
    description: 'Altes Buch',
    rating: 3
  }, {
    isbn: '222',
    title: 'jQuery',
    description: 'Super altes Buch',
    rating: 1
  }];

  doRateUp(book: Book) {
    const ratedBook = this.br.rateUp(book);
    // const ratedBook = {
    //   ...book,
    //   rating: book.rating < 5 ? book.rating + 1 : 5
    // }
    this.updateAndSortBooks(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.br.rateDown(book);
    this.updateAndSortBooks(ratedBook);
  }

  fixMyScopeRateUpAllowed() {
    return (book: Book) => this.br.isRateUpAllowed(book);
  }

  updateAndSortBooks(ratedBook: Book) {
    this.books = this.books
      .map(b => ratedBook.isbn === b.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating)
  }
}
