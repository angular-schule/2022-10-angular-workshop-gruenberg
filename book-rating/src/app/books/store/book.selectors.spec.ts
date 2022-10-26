import * as fromBook from './book.reducer';
import { selectBookState } from './book.selectors';

describe('Book Selectors', () => {
  it('should select the feature state', () => {
    const result = selectBookState({
      [fromBook.bookFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
