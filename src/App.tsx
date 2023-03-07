import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './components';
import { MainPage } from './pages';

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
      </Route>
    </Routes>
  );
};
