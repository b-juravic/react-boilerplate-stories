/*
 * NewStoryForm actions
 */

import {
  CHANGE_NEW_STORY,
  ADD_NEW_STORY,
  NEW_STORY_SUCCESS,
  NEW_STORY_ERROR,
  RESET_NEW_STORY,
} from './constants';

export function changeNewStory(newStory) {
  return {
    type: CHANGE_NEW_STORY,
    newStory,
  };
}

export function addNewStory(newStory) {
  return {
    type: ADD_NEW_STORY,
    newStory,
  };
}

export function newStorySuccess() {
  return {
    type: NEW_STORY_SUCCESS,
  };
}

export function newStoryError(error) {
  return {
    type: NEW_STORY_ERROR,
    error,
  };
}

export function resetNewStory() {
  return {
    type: RESET_NEW_STORY,
  };
}
