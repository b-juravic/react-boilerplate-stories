import {
  selectGlobal,
  makeSelectStories,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
} from 'containers/App/selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalStateTest = {};
    const mockGlobalStateTest = { global: globalStateTest };

    expect(selectGlobal(mockGlobalStateTest)).toEqual(globalStateTest);
  });
});

describe('makeSelectStories', () => {
  const storiesSelector = makeSelectStories();
  it('should select the stories', () => {
    const storiesTest = [{ story: 'Test Story', id: 1 }];
    const mockGlobalStateTest = {
      global: {
        stories: storiesTest,
      },
    };

    expect(storiesSelector(mockGlobalStateTest)).toEqual(storiesTest);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select loading', () => {
    const loadingTest = false;
    const mockGlobalStateTest = {
      global: {
        loading: loadingTest,
      },
    };

    expect(loadingSelector(mockGlobalStateTest)).toEqual(loadingTest);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select error', () => {
    const errorTest = false;
    const mockGlobalStateTest = {
      global: {
        error: errorTest,
      },
    };

    expect(errorSelector(mockGlobalStateTest)).toEqual(errorTest);
  });
});

describe('makeSelectLocation', () => {
  it('should select the location', () => {
    const router = {
      location: { pathname: '/foo' },
    };
    const mockedState = {
      router,
    };
    expect(makeSelectLocation()(mockedState)).toEqual(router.location);
  });
});
