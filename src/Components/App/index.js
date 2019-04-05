import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Main from '../Main';
import NavBarMain from '../NavBarMain';
import RatingHTML from '../'
import About from 

import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
      <NavBarMain />

      <hr />
      <Route exact path={ROUTES.MAIN} component={Main} />
      <Route path={ROUTES.RATING} component={RatingHTML} />
      <Route path={ROUTES.ABOUT} component={About} />
    </div>
  </Router>
);

export default App;