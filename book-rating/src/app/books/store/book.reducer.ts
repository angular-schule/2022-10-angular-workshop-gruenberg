/* eslint-disable @ngrx/on-function-explicit-return-type */
import { Action, createReducer, on } from '@ngrx/store';
import { Book } from '../shared/book';
import * as BookActions from './book.actions';

export const bookFeatureKey = 'book';

export interface State {
  books: Book[];
  loading: boolean
}

export const initialState: State = {
  books: [],
  loading: false
};

export const reducer = createReducer(
  initialState,

  on(BookActions.loadBooks, state => ({
    ...state,
    loading: true
  })),

  on(BookActions.loadBooksSuccess, (state, { books }) => ({
    ...state,
    loading: false,
    books
  })),

  on(BookActions.loadBooksFailure, state => ({
    ...state,
    loading: false,
    books: []
  }))
);
