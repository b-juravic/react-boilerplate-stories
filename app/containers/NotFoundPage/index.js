/**
 * Renders a page not found message for invalid routes
 *
 */

import React from 'react';
import CenteredDiv from 'components/CenteredDiv/index';

export default function NotFound() {
  return (
    <CenteredDiv>
      <h1>Oops! Page not found...</h1>
    </CenteredDiv>
  );
}
