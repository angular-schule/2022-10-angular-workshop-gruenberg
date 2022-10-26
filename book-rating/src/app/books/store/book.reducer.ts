import { Action, createReducer, on } from '@ngrx/store';
import * as BookActions from './book.actions';

export const bookFeatureKey = 'book';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(BookActions.loadBooks, state => state),
  on(BookActions.loadBooksSuccess, (state, action) => state),
  on(BookActions.loadBooksFailure, (state, action) => state),

);
