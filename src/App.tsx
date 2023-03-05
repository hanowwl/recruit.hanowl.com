import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainPage } from './pages';
import { TeamPage } from './pages/teams';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/teams" element={<TeamPage />} />
    </Routes>
  );
};
