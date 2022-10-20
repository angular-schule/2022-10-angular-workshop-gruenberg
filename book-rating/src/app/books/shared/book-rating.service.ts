import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  readonly minRating = 1;
  readonly maxRating = 5;

  rateUp(book: Book): Book {
    return {
      ...book,
      rating: book.rating < this.maxRating ? book.rating + 1 : this.maxRating
    }
  }

  rateDown(book: Book): Book {
    const rating = Math.max(book.rating - 1, this.minRating);

    return {
      ...book,
      rating
    };
  }
}
