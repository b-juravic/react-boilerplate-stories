/**
 * Renders a single story
 */

import React from 'react';
import PropTypes from 'prop-types';

function Story({ story }) {
  return <li>{story}</li>;
}

Story.propTypes = {
  story: PropTypes.string,
};

export default Story;
