import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';

import { Character } from '../utils/types';

export function Searchbar() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const characters: Array<Character> = JSON.parse(
    localStorage.getItem('allCharacters') || '[]'
  );
  const [searchedCharacters, setSearchedCharacters] = useState<Character[]>([]);

  useEffect(() => {
    if (characters) {
      const filteredCharactersBySearch = characters.filter(
        (character: Character) =>
          character.name.toLowerCase().startsWith(inputValue.toLowerCase())
      );
      setSearchedCharacters(filteredCharactersBySearch);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  function conditionalRender() {
    if (inputValue !== '' && searchedCharacters.length !== 0)
      return (
        <Box
          bgColor="gray.800"
          pos="absolute"
          overflowY="auto"
          maxH={500}
          left={0}
          top={10}
          w="100%">
          {searchedCharacters.map((character) => (
            <Box
              key={character.id}
              as="button"
              onClick={() => handleInputDropdownSelection(character.id)}
              display="block"
              w="100%"
              py="4"
              textAlign="left"
              _hover={{ bg: 'gray.700' }}>
              <Text
                pl="4"
                color="gray.300"
                fontSize="16px"
                fontFamily="RobotoBold">
                {character.name}
              </Text>
            </Box>
          ))}
        </Box>
      );
    return null;
  }

  function handleInputChange(event: any) {
    setInputValue(event.target.value);
  }

  function handleInputDropdownSelection(characterId: any) {
    setInputValue('');
    navigate(`/character/${characterId}`);
  }

  return (
    <Box
      mt={{ base: '2', lg: '4' }}
      mx={{ base: '2', lg: '8', xl: '24', '2xl': '32' }}>
      <Box pos="relative" w="100%">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<AiOutlineSearch color="gray.300" />}
          />
          <Input
            value={inputValue}
            focusBorderColor="#38B2AC"
            placeholder="Search character..."
            onChange={handleInputChange}
          />
        </InputGroup>
        {conditionalRender()}
      </Box>
    </Box>
  );
}
