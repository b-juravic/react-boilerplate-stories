/**
 * Renders a message for users
 */

import React from 'react';
import PropTypes from 'prop-types';
import MessageContainer from '../MessageContainer/index';

function UserMessage({ message, success }) {
  return <MessageContainer success={success}>{message}</MessageContainer>;
}

UserMessage.propTypes = {
  success: PropTypes.bool,
  message: PropTypes.string,
};

export default UserMessage;
