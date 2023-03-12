import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { AuthLayout, DefaultLayout, PrivateRoute } from './components';
import { TEAM_LIST } from './constant';
import { MainPage, TeamMainPage, SignInPage, SignUpPage } from './pages';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <DefaultLayout>
            <Outlet />
          </DefaultLayout>
        }
      >
        <Route index element={<MainPage />} />
        <Route path="/teams">
          <Route index element={<Navigate to={`/teams/${TEAM_LIST[0].id}`} />} />
          <Route path=":teamId">
            <Route index element={<TeamMainPage />} />
          </Route>
        </Route>
      </Route>

      <Route element={<PrivateRoute needAuth={false} />}>
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
      </Route>
    </Routes>
  );
};
