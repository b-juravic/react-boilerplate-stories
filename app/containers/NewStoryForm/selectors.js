import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * NewStoryForm selectors
 */

const selectNewStoryForm = state => state.newStory || initialState;

const makeSelectNewStory = () =>
  createSelector(
    selectNewStoryForm,
    newStoryFormState => newStoryFormState.newStory,
  );

const makeSelectLoading = () =>
  createSelector(
    selectNewStoryForm,
    newStoryFormState => newStoryFormState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectNewStoryForm,
    newStoryFormState => newStoryFormState.error,
  );

const makeSelectSuccess = () =>
  createSelector(
    selectNewStoryForm,
    newStoryFormState => newStoryFormState.success,
  );

export {
  selectNewStoryForm,
  makeSelectNewStory,
  makeSelectLoading,
  makeSelectSuccess,
  makeSelectError,
};
