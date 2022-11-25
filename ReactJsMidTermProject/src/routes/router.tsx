import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Searchbar } from '../components/Searchbar';
import { Home } from './Home';
import { CharacterDetails } from './CharacterDetails';

export function Router() {
  return (
    <BrowserRouter>
      <Searchbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
