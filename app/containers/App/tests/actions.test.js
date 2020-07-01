import {
  LOAD_STORIES,
  LOAD_STORIES_SUCCESS,
  LOAD_STORIES_ERROR,
} from '../constants';

import { loadStories, storiesLoaded, storiesLoadingError } from '../actions';

describe('App Actions', () => {
  describe('loadStories', () => {
    it('should return correct action type', () => {
      const expectedResult = {
        type: LOAD_STORIES,
      };

      expect(loadStories()).toEqual(expectedResult);
    });
  });

  describe('storiesLoaded', () => {
    it('should return correct action type and passed stories', () => {
      const storiesTest = [{ story: 'Test Story', id: 1 }];
      const expectedResult = {
        type: LOAD_STORIES_SUCCESS,
        stories: storiesTest,
      };

      expect(storiesLoaded(storiesTest)).toEqual(expectedResult);
    });
  });

  describe('storiesLoadingError', () => {
    it('should return correct action type and the error', () => {
      const errorTest = { msg: 'Testing error' };
      const expectedResult = {
        type: LOAD_STORIES_ERROR,
        error: errorTest,
      };

      expect(storiesLoadingError(errorTest)).toEqual(expectedResult);
    });
  });
});
