/*
 *
 * NewStoryForm reducer
 *
 */
import produce from 'immer';
import {
  CHANGE_NEW_STORY,
  ADD_NEW_STORY,
  NEW_STORY_SUCCESS,
  NEW_STORY_ERROR,
  RESET_NEW_STORY,
} from './constants';

export const initialState = {
  newStory: '',
  loading: false,
  error: false,
  success: false,
};

/* eslint-disable default-case, no-param-reassign */
const newStoryFormReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_NEW_STORY:
        draft.newStory = action.newStory;
        draft.success = false;
        break;

      case ADD_NEW_STORY:
        draft.loading = true;
        break;

      case NEW_STORY_SUCCESS:
        draft.newStory = '';
        draft.loading = false;
        draft.error = false;
        draft.success = true;
        break;

      case NEW_STORY_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case RESET_NEW_STORY:
        draft.newStory = '';
        draft.loading = false;
        draft.error = false;
        draft.success = false;
        break;
    }
  });

export default newStoryFormReducer;
