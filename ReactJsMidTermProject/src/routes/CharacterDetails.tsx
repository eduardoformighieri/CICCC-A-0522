import { useParams, Link as RouterLink } from 'react-router-dom';
import { Box, Link, Text, Image, Button, Flex } from '@chakra-ui/react';

import { BiArrowBack } from 'react-icons/bi';
import { FaPencilAlt } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import { useState } from 'react';
import { CharacterEditForm } from '../components/CharacterEditForm';

import { Character } from '../utils/types';

interface RouteParams {
  id: string;
}

export function CharacterDetails() {
  const [formVisibility, setFormVisibility] = useState(false);
  const allStoragedCharacters: Array<Character> = JSON.parse(
    localStorage.getItem('allCharacters') || '[]'
  );

  const { id }: RouteParams = useParams();

  const character: any = allStoragedCharacters.find(
    (character) => character?.id === id
  );

  function handleClick() {
    setFormVisibility(!formVisibility);
  }

  function renderConditionalButtons() {
    if (formVisibility) {
      return (
        <Button
          leftIcon={<AiOutlineClose />}
          onClick={handleClick}
          colorScheme="red"
          size="md"
          p="7">
          Cancel
        </Button>
      );
    }

    return (
      <Button
        leftIcon={<FaPencilAlt />}
        onClick={handleClick}
        colorScheme="teal"
        size="md"
        p="7">
        Edit
      </Button>
    );
  }

  function renderConditionalForm() {
    if (formVisibility) {
      return <CharacterEditForm character={character} />;
    }
    return null;
  }

  return (
    <Box
      mt={{ base: '2', lg: '4' }}
      mx={{ base: '2', lg: '8', xl: '24', '2xl': '32' }}>
      <Flex justify="space-between">
        <Link
          userSelect="none"
          as={RouterLink}
          display="flex"
          alignItems="center"
          _active={{ outline: 0, border: 'none' }}
          _focus={{ outline: 0, border: 'none' }}
          _hover={{ textDecoration: 'none', color: '#38B2AC' }}
          to="/">
          <BiArrowBack size={24} />
          <Text ml="2" fontSize="22">
            Home
          </Text>
        </Link>

        {renderConditionalButtons()}
      </Flex>

      <Flex
        flexDirection="column"
        w={320}
        borderRadius="4"
        bg="gray.700"
        margin="4"
        mx="auto">
        <Image
          borderTopRightRadius="4"
          borderTopLeftRadius="4"
          w={320}
          src={character?.image}
          alt={character?.name}
        />

        <Box p="4">
          <Text pt="4" color="gray.100" fontFamily="RobotoBlack" fontSize="4xl">
            {character?.name}
          </Text>
          <Flex pt="3" fontSize="lg" flexWrap="wrap">
            <Text pr="2" fontFamily="RobotoMedium" color="gray.500">
              Status:
            </Text>
            <Text fontFamily="Roboto" color="gray.300">
              {character?.status}
            </Text>
          </Flex>
          <Flex pt="2" fontSize="lg" flexWrap="wrap">
            <Text pr="2" fontFamily="RobotoMedium" color="gray.500">
              Specie:
            </Text>
            <Text fontFamily="Roboto" color="gray.300">
              {character?.species}
            </Text>
          </Flex>
          <Flex pt="2" fontSize="lg" flexWrap="wrap">
            <Text pr="2" fontFamily="RobotoMedium" color="gray.500">
              Origin:
            </Text>
            <Text fontFamily="Roboto" color="gray.300">
              {character?.origin.name}
            </Text>
          </Flex>
          <Flex pt="2" pb="4" fontSize="lg" flexWrap="wrap">
            <Text pr="2" fontFamily="RobotoMedium" color="gray.500">
              Last seen on:
            </Text>
            <Text fontFamily="Roboto" color="gray.300">
              {character?.location.name}
            </Text>
          </Flex>
        </Box>
      </Flex>
      {renderConditionalForm()}
    </Box>
  );
}
