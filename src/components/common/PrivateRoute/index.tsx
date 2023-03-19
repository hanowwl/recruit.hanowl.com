import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/providers';

export interface PrivateRouteProps {
  children?: React.ReactNode;
  needAuth?: boolean;
  roles?: string[];
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  needAuth = false,
  roles = ['all'],
}) => {
  const { profile } = useAuth();
  const isAuthenticatedUser = profile !== null;
  const isHasAccessRole = profile ? roles.includes('all') || roles.includes(profile.role) : false;

  if (needAuth) {
    return isAuthenticatedUser && isHasAccessRole ? <Outlet /> : <Navigate to="/auth/signin" />;
  } else {
    return isAuthenticatedUser ? <Navigate to="/" /> : <Outlet />;
  }
};
