/** Get all stories from backend API */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { v4 as uuid } from 'uuid';
import { LOAD_STORIES } from '../App/constants';
import { storiesLoaded, storiesLoadingError } from '../App/actions';
import { resetNewStory } from '../NewStoryForm/actions';

/**
 * Fetch stories request and response handler
 *
 * Also resets NewStoryForm state
 * */

export function* getStories() {
  const requestURL = 'http://localhost:3000/api/stories/';

  try {
    const stories = yield call(request, requestURL);
    // add unique id for each story
    const storiesAndId = stories.stories.map(s => ({
      story: s,
      id: uuid(),
    }));

    yield put(storiesLoaded(storiesAndId));
    yield put(resetNewStory());
  } catch (err) {
    yield put(storiesLoadingError(err));
  }
}

/** Root saga manages watcher */

export default function* storiesData() {
  // Watches for LOAD_STORIES actions and then calls getStories.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_STORIES, getStories);
}
