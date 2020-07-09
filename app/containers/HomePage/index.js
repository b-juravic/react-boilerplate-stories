/**
 * Gets all stories from backend API
 *
 * Renders StoriesList
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import StoriesList from 'components/StoriesList/index';
import CenteredDiv from 'components/CenteredDiv/index';
import DivStyled from 'components/DivStyled/index';
import {
  makeSelectStories,
  makeSelectLoading,
  makeSelectError,
} from '../App/selectors';

import { loadStories } from '../App/actions';
import saga from './saga';

const key = 'home';

export function HomePage({ stories, loading, error, fetchData }) {
  useInjectSaga({ key, saga });

  useEffect(function fetchStories() {
    fetchData();
  }, []);

  return (
    <div>
      <CenteredDiv>
        <h1>Welcome to Stories!</h1>
      </CenteredDiv>
      <DivStyled>
        <StoriesList stories={stories} loading={loading} error={error} />
      </DivStyled>
    </div>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  stories: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  fetchData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  stories: makeSelectStories(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => {
      dispatch(loadStories());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
