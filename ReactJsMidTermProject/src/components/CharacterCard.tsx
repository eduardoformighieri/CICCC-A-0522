import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { Character } from '../utils/types';

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  const navigate = useNavigate();
  function handleClick(characterId: string) {
    navigate(`/character/${characterId}`);
  }

  return (
    <Flex
      borderRadius="4"
      as="button"
      flexDirection="column"
      textAlign="left"
      onClick={() => handleClick(character.id)}
      w={{ base: 280, md: 320 }}
      bg="gray.700"
      mt="4"
      mx="auto">
      <Image
        borderTopRightRadius="4"
        borderTopLeftRadius="4"
        w={{ base: 280, md: 320 }}
        src={character.image}
        alt={character.name}
      />

      <Box p="4">
        <Text pt="4" color="gray.100" fontFamily="RobotoBlack" fontSize="4xl">
          {character.name}
        </Text>
        <Flex pt="3" fontSize="lg" flexWrap="wrap">
          <Text pr="2" fontFamily="RobotoMedium" color="gray.500">
            Status:
          </Text>
          <Text fontFamily="Roboto" color="gray.300">
            {character.status}
          </Text>
        </Flex>
        <Flex pt="2" fontSize="lg" flexWrap="wrap">
          <Text pr="2" fontFamily="RobotoMedium" color="gray.500">
            Specie:
          </Text>
          <Text fontFamily="Roboto" color="gray.300">
            {character.species}
          </Text>
        </Flex>
        <Flex pt="2" fontSize="lg" flexWrap="wrap">
          <Text pr="2" fontFamily="RobotoMedium" color="gray.500">
            Origin:
          </Text>
          <Text fontFamily="Roboto" color="gray.300">
            {character.origin.name}
          </Text>
        </Flex>
        <Flex pt="2" pb="4" fontSize="lg" flexWrap="wrap">
          <Text pr="2" fontFamily="RobotoMedium" color="gray.500">
            Last seen on:
          </Text>
          <Text fontFamily="Roboto" color="gray.300">
            {character.location.name}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
