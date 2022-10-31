import { Grid } from '@giphy/react-components';
import { useState } from 'react';

import useWindowSize from '../hooks/useWindowSize';
import { gf } from '../utils/GiphyFetch';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';

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
