import { Flex } from '@chakra-ui/react';
import { CharacterCard } from './CharacterCard';

import { Character } from '../utils/types';

import { paginateArray } from '../utils/helpers';

interface CharactersListProps {
  page: number;
}

export function CharactersList({ page }: CharactersListProps) {
  const allStoragedCharacters: Array<Character> = JSON.parse(
    localStorage.getItem('allCharacters') || '[]'
  );

  const paginatedList: Array<Character> = paginateArray(
    allStoragedCharacters,
    20,
    page
  );

  return (
    <Flex flexWrap="wrap">
      {paginatedList.map((character: Character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Flex>
  );
}
