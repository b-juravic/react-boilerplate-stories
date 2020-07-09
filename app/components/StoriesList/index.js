/**
 * Renders list of all stories, text indicating no stories exist, loading message, or error message.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Story from 'components/Story/index';
import UserMessage from 'components/UserMessage/index';

function StoriesList({ stories, loading, error }) {
  if (loading) {
    return <UserMessage success message="Loading..." />;
  }

  if (error) {
    return <UserMessage message="Something went wrong, please try again." />;
  }

  if (stories.length === 0) {
    return (
      <div>
        <h3>You have not added any stories yet...</h3>
      </div>
    );
  }

  if (stories.length > 0) {
    const storyItems = stories.map(({ story, id }) => (
      <Story story={story} key={id} />
    ));

    return (
      <div>
        <h3>My Stories {'(ordered newest to oldest)'}</h3>
        <ul>{storyItems}</ul>
      </div>
    );
  }
}

StoriesList.propTypes = {
  stories: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default StoriesList;
