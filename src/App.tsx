import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { AuthLayout, DefaultLayout } from './components';
import { MainPage, TeamPage, SignInPage, SignUpPage } from './pages';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <DefaultLayout>
            <Outlet />
          </DefaultLayout>
        }
      >
        <Route index element={<MainPage />} />
        <Route path="/teams" element={<TeamPage />} />
      </Route>
      <Route
        path="auth"
        element={
          <AuthLayout>
            <Outlet />
          </AuthLayout>
        }
      >
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
};
