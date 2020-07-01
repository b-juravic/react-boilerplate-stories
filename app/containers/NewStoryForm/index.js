/**
 * Adds new user story to backend
 *
 * Renders loading indicator, success message, and error message as needed
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import './NewStoryForm.css';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import UserMessage from 'components/UserMessage/index';
import CenteredDiv from 'components/CenteredDiv/index';
import { changeNewStory, addNewStory } from './actions';
import {
  makeSelectNewStory,
  makeSelectLoading,
  makeSelectSuccess,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'newStory';

export function NewStoryForm({
  newStory,
  loading,
  success,
  error,
  onSubmit,
  onChange,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const errorMessage =
    error.message !== undefined ? (
      <UserMessage message={error.message} />
    ) : null;

  const successMessage =
    success === true ? (
      <UserMessage success message="Your story has been added!" />
    ) : null;

  const loadingMessage =
    loading === true ? <UserMessage success message="Loading..." /> : null;

  return (
    <CenteredDiv>
      <form onSubmit={onSubmit}>
        <div>
          {errorMessage}
          {successMessage}
          {loadingMessage}
        </div>
        <label htmlFor="newStory">Tell your story here</label>
        <textarea
          id="newStory"
          name="newStory"
          rows="5"
          cols="50"
          value={newStory}
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>
    </CenteredDiv>
  );
}

NewStoryForm.propTypes = {
  newStory: PropTypes.string,
  loading: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  newStory: makeSelectNewStory(),
  loading: makeSelectLoading(),
  success: makeSelectSuccess(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChange: evt => dispatch(changeNewStory(evt.target.value)),
    onSubmit: evt => {
      evt.preventDefault();
      dispatch(addNewStory());
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
)(NewStoryForm);
