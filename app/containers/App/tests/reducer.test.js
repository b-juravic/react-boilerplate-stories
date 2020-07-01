/* eslint-disable no-param-reassign */
import produce from 'immer';

import appReducer from '../reducer';
import { loadStories, storiesLoaded, storiesLoadingError } from '../actions';

describe('appReducer', () => {
  let stateTest;
  beforeEach(() => {
    stateTest = {
      loading: false,
      error: false,
      stories: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = stateTest;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle loadStories correctly', () => {
    const expectedResult = produce(stateTest, draft => {
      draft.loading = true;
      draft.error = false;
      draft.stories = false;
    });

    expect(appReducer(stateTest, loadStories())).toEqual(expectedResult);
  });

  it('should handle storiesLoaded correctly', () => {
    const storiesTest = [{ story: 'Test Story', id: 1 }];
    const expectedResult = produce(stateTest, draft => {
      draft.stories = storiesTest;
      draft.loading = false;
    });

    expect(appReducer(stateTest, storiesLoaded(storiesTest))).toEqual(
      expectedResult,
    );
  });

  it('should handle storiesLoadingError correctly', () => {
    const errorTest = { msg: 'Test Error' };
    const expectedResult = produce(stateTest, draft => {
      draft.error = errorTest;
      draft.loading = false;
    });

    expect(appReducer(stateTest, storiesLoadingError(errorTest))).toEqual(
      expectedResult,
    );
  });
});
