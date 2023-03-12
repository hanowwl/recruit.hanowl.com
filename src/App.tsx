import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './components';
import { MainPage, QnAPage, TeamPage } from './pages';

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
        <Route path="/qna">
          <Route index element={<Navigate to="/qna/dev" />} />
          <Route path="*" element={<QnAPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
