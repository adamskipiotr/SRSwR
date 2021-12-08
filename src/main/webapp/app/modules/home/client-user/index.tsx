import React from 'react';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import ClientReservation from './client-reservation';
import ClientMyReservations from './client-my-reservation';
import ReservationForm from '../reservations/reservation-form';
import PrivateRoute from '../../../shared/auth/private-route';
import { AUTHORITIES } from 'app/config/constants';

const Routes = ({ match }) => (
  <div>
    <ErrorBoundaryRoute exact path='/' component={ClientReservation} />
    <ErrorBoundaryRoute exact path='/my-reservations' component={ClientMyReservations} />
    <PrivateRoute exact path='/reservations/create' component={ReservationForm} hasAnyAuthorities={[AUTHORITIES.OWNER]}/>
  </div>
);

export default Routes;