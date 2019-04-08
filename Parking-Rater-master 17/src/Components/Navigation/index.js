// this is left here for refrence in case someone wants to take the nav bar and turn it into
//something like this
import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.MAIN}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.RATING}>Rate Parking</Link>
      </li>
      <li>
        <Link to={ROUTES.ABOUT}>About</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;