import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/providers';

export interface PrivateRouteProps {
  children?: React.ReactNode;
  needAuth?: boolean;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ needAuth = false }) => {
  const { profile } = useAuth();
  const isAuthenticatedUser = profile === null;

  if (needAuth) {
    return isAuthenticatedUser ? <Navigate to="/auth/signin" /> : <Outlet />;
  } else {
    return isAuthenticatedUser ? <Outlet /> : <Navigate to="/" />;
  }
};
