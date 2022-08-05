import {
  Box,
  Flex,
  Text,
  VStack,
  Link,
  Button,
  HStack,
} from '@chakra-ui/react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { getRecords, deleteRecord } from '../api';
import { useState } from 'react';

type record = {
  id: number;
  convertionType: string;
  valueToBeConverted: number;
  fromUnity: string;
  convertedValue: number;
  toUnity: string;
};

export const Records = () => {
  const queryClient = useQueryClient();
  const query = useQuery(['records'], getRecords);

  const { isLoading, mutate } = useMutation((id: any) => deleteRecord(id), {
    onError: (error: any) => {
      alert(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['records']);
    },
  });

  return (
    <Flex flexDir="column" alignItems="center">
      <Text my={20} fontSize="5xl">
        You can see your saved convertions here.
      </Text>
      <VStack spacing={4} w="100%">
        {query?.data?.map((todo: record) => (
          <Flex
            w="100%"
            justify="space-around"
            bg="primary"
            borderRadius={8}
            p={8}
            color="secondary"
            fontSize="2xl"
            key={todo.id}
            alignItems="center">
            <HStack spacing={4} alignItems="center">
              <Text color="gray.400">Type of convertion:</Text>
              <Text>{todo.convertionType}</Text>
            </HStack>
            <HStack spacing={4} alignItems="center">
              <Text color="gray.400">Value:</Text>
              <Text>{todo.valueToBeConverted}</Text>
            </HStack>
            <HStack spacing={4} alignItems="center">
              <Text color="gray.400">Value:</Text>
              <Text>{todo.fromUnity}</Text>
            </HStack>
            <HStack spacing={4} alignItems="center">
              <Text color="gray.400">Converted value:</Text>
              <Text>{todo.convertedValue}</Text>
            </HStack>
            <HStack spacing={4} alignItems="center">
              <Text color="gray.400">Value:</Text>
              <Text>{todo.toUnity}</Text>
            </HStack>
            <Flex
              alignItems="center"
              as="button"
              onClick={() => mutate(todo.id)}>
              X
            </Flex>
          </Flex>
        ))}
      </VStack>
    </Flex>
  );
};
