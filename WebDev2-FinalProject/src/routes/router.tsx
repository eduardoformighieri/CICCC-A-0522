import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Home } from './Home';
import { SearchedGifs } from './SearchedGifs';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:searchTerm" element={<SearchedGifs />} />
      </Routes>
    </BrowserRouter>
  );
};
