/**
 * Renders Navigation, Routes, and GlobalStyle
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from 'components/Navigation/index';
import HomePage from 'containers/HomePage/index';
import NotFoundPage from 'containers/NotFoundPage/index';
import NewStoryForm from 'containers/NewStoryForm/index';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/new" component={NewStoryForm} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
