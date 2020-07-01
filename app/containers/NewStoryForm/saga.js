/**
 * Add user new story to backend
 */

import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import { makeSelectNewStory } from './selectors';
import { ADD_NEW_STORY } from './constants';
import { newStorySuccess, newStoryError } from './actions';

/** Post new story request / response handler */

export function* postNewStory() {
  // selects newStory from store
  const newStory = yield select(makeSelectNewStory());
  const trimNewStory = newStory.trim();
  const requestURL = 'http://localhost:3000/api/stories/';
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ newStory: trimNewStory }),
  };

  try {
    // validate not empty string
    if (trimNewStory.length < 1) {
      throw new Error('Story cannot contain only spaces.');
    }

    // Call our request helper (see 'utils/request')
    yield call(request, requestURL, options);
    yield put(newStorySuccess());
  } catch (err) {
    yield put(newStoryError(err));
  }
}

/** Root saga manages watcher */

export default function* storiesData() {
  // Watches for ADD_NEW_STORY actions and then calls postNewStory.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ADD_NEW_STORY, postNewStory);
}
