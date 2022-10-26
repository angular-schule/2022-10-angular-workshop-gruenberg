import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBook from './book.reducer';

export const selectBookState = createFeatureSelector<fromBook.State>(
  fromBook.bookFeatureKey
);

export const selectLoading = createSelector(
  selectBookState,
  state => state.loading
);

export const selectBooks = createSelector(
  selectBookState,
  state => state.books
);


// computed selector (nur Beispiel)
export const selectBooksFirst = createSelector(
  selectBooks,
  state => state.length
);
