import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import ReactPaginate from 'react-paginate';
import { GET_NUMBER_OF_CHARACTER_PAGES } from '../apollo/queries';

import { CharactersList } from './CharactersList';
import '../styles/ReactPaginateStyles.css';

interface PageChangeEvent {
  selected: number;
}

export function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const { error, loading, data } = useQuery(GET_NUMBER_OF_CHARACTER_PAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const pages = data.characters.info.pages - 1;

  function handlePageClick(event: PageChangeEvent) {
    setCurrentPage(event.selected + 1);
  }

  return (
    <Flex alignItems="center" flexDir="column" pt="8">
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
      <CharactersList page={currentPage} />
    </Flex>
  );
}
