import { Grid } from '@giphy/react-components';
import { useEffect, useState } from 'react';

import useWindowSize from '../hooks/useWindowSize';
import { gf } from '../utils/GiphyFetch';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../components/Header';

export const SearchedGifs = () => {
  const { searchTerm } = useParams();
  const { width } = useWindowSize();
  const fetchGifs = (offset: number) =>
    gf.search(searchTerm!, { offset, limit: 10 });

  return (
    <>
      <Header />
      <Grid fetchGifs={fetchGifs} width={width - 17} columns={3} gutter={6} />
    </>
  );
};
