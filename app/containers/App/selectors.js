import { createSelector } from 'reselect';
import { initialState } from './reducer';

/** Global state selectors */

const selectGlobal = state => state.global || initialState;
const selectRouter = state => state.router;

const makeSelectStories = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.stories,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectGlobal,
  makeSelectStories,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
};
