import { Grid } from '@giphy/react-components';
import { useState } from 'react';

import useWindowSize from '../hooks/useWindowSize';
import { gf } from '../utils/GiphyFetch';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';

// define the components in a separate function so we can
// use the context hook. You could also use the render props pattern
export const Home = () => {
  const { width } = useWindowSize();
  const fetchGifs = (offset: number) => gf.trending({ offset, limit: 25 });

  return (
    <>
      <Header />
      <Grid fetchGifs={fetchGifs} width={width - 17} columns={3} gutter={6} />
    </>
  );
};
