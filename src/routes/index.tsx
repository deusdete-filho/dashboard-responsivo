import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import Data from '../pages/Data';
import Email from '../pages/Email';

const Routes: React.FC = () => (
  <Suspense fallback={<div>Carregando...</div>}>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/data" exact component={Data} />
      <Route path="/email" exact component={Email} />
    </Switch>
  </Suspense>
);
export default Routes;
