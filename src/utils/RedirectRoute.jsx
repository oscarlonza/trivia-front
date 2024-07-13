import React from 'react';
import { Navigate } from 'react-router-dom';
import isAuthenticated from '../services/auth';

const RedirectRoute = ({ element }) => {
  return isAuthenticated() ? <Navigate to="/" /> : element;
};

export default RedirectRoute;
