/*
 * App Reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_STORIES_SUCCESS,
  LOAD_STORIES,
  LOAD_STORIES_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: true,
  error: false,
  stories: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_STORIES:
        draft.loading = true;
        break;

      case LOAD_STORIES_SUCCESS:
        draft.stories = action.stories;
        draft.loading = false;
        break;

      case LOAD_STORIES_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
