/**
 * Renders list of all stories or text indicating no stories exist
 */

import React from 'react';
import PropTypes from 'prop-types';
import Story from 'components/Story/index';

function StoriesList({ stories }) {
  if (!stories) {
    return (
      <div>
        <h3>You do not have any stories yet</h3>
      </div>
    );
  }

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

StoriesList.propTypes = {
  stories: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default StoriesList;
