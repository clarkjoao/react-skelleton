import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignOut from '../pages/SignOut';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signout" exact component={SignOut} isPrivate />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
