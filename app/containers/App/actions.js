/*
 * App actions
 */

import {
  LOAD_STORIES,
  LOAD_STORIES_SUCCESS,
  LOAD_STORIES_ERROR,
} from './constants';

export function loadStories() {
  return {
    type: LOAD_STORIES,
  };
}

export function storiesLoaded(stories) {
  return {
    type: LOAD_STORIES_SUCCESS,
    stories,
  };
}

export function storiesLoadingError(error) {
  return {
    type: LOAD_STORIES_ERROR,
    error,
  };
}
