import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Text, VStack, Box, Input, Button, FormLabel } from '@chakra-ui/react';

import { Character } from '../utils/types';
import { useNavigate } from 'react-router-dom';

interface CharacterEditFormProps {
  character: Character;
}

export function CharacterEditForm({ character }: CharacterEditFormProps) {
  const navigate = useNavigate();

  const defaultValues: Character = {
    ...character,
  };
  const { register, handleSubmit } = useForm({
    defaultValues,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [anyDataChanged, setAnyDataChanged] = useState(false);

  function onSubmit(data: Character) {
    setIsSubmitting(true);
    if (JSON.stringify(data) === JSON.stringify(defaultValues)) {
      setAnyDataChanged(true);
      setIsSubmitting(false);
      return;
    }
    setAnyDataChanged(false);

    const allStoragedCharacters: Array<Character> = JSON.parse(
      localStorage.getItem('allCharacters') || '[]'
    );

    const overwriteStoragedCharacter = allStoragedCharacters.map(
      (character: Character) =>
        character.id === data.id
          ? {
              __typename: 'Character',
              id: data.id,
              image: data.image,
              location: { __typename: 'Location', name: data.location.name },
              name: data.name,
              origin: { __typename: 'Origin', name: data.origin.name },
              species: data.species,
              status: data.status,
            }
          : character
    );

    localStorage.setItem(
      'allCharacters',
      JSON.stringify(overwriteStoragedCharacter)
    );

    setIsSubmitting(false);
    navigate('/');
  }

  return (
    <Box mt="12" bg="#151515" p="8" borderRadius="8">
      {anyDataChanged ? (
        <Text color="red">Change some value before saving.</Text>
      ) : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing="8" alignItems="flex-start">
          <Box w="100%">
            <FormLabel>Image URL:</FormLabel>
            <Input
              {...register('image')}
              focusBorderColor="#38B2AC"
              placeholder="image"
            />
          </Box>
          <Box w="100%">
            <FormLabel>Name:</FormLabel>
            <Input
              {...register('name')}
              focusBorderColor="#38B2AC"
              placeholder="Name"
            />
          </Box>
          <Box w="100%">
            <FormLabel>Status:</FormLabel>
            <Input
              {...register('status')}
              focusBorderColor="#38B2AC"
              placeholder="status"
            />
          </Box>
          <Box w="100%">
            <FormLabel>Specie:</FormLabel>
            <Input
              {...register('species')}
              focusBorderColor="#38B2AC"
              placeholder="species"
            />
          </Box>
          <Box w="100%">
            <FormLabel>Origin:</FormLabel>
            <Input
              {...register('origin.name')}
              focusBorderColor="#38B2AC"
              placeholder="origin.name"
            />
          </Box>
          <Box w="100%">
            <FormLabel>Last seen on:</FormLabel>
            <Input
              {...register('location.name')}
              focusBorderColor="#38B2AC"
              placeholder="location.name"
            />
          </Box>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit">
            Save
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
