import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { SyntheticEvent } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { createPost, getPost, updatePost } from '../api/posts';
import { UpdatePostDto, Post } from '../types';
import { setStorage } from '../utils/storage';

export const EditPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const toast = useToast();
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<UpdatePostDto>();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    (formData: UpdatePostDto) => updatePost(formData, Number(postId!)),
    {
      onError: (error: AxiosError<{ message: string }>) => {
        toast({
          title: 'Try again',
          status: 'error',
          isClosable: true,
          position: 'top-right',
        });
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries(['getAllPosts']);
        queryClient.invalidateQueries(['getAllPostsByUser']);
        queryClient.invalidateQueries(['getPostForEdit']);

        toast({
          title: 'Post created',
          status: 'success',
          isClosable: true,
          position: 'top-right',
        });
        navigate('/posts');
      },
    }
  );

  const onSubmit = (inputValues: UpdatePostDto) => {
    mutate(inputValues);
  };

  const { isLoading, isError, error, data } = useQuery<Post, Error>(
    ['getPostForEdit', postId],
    () => getPost(postId!)
  );
  const goBack = (event: SyntheticEvent) => {
    event.preventDefault();
    navigate(-1);
  };

  if (isLoading) {
    return <Spinner size="xl" />;
  }
  if (isError) {
    return (
      <Flex w="100%" justifyContent="center" py="70px">
        <Text fontFamily="SourceSansProSemiBold" fontSize="2xl">
          Error getting post:
        </Text>
        <Text mt={2}>{error.message}</Text>
      </Flex>
    );
  }

  return (
    <Box w="100%" maxW="800px" mx="auto" pt={16}>
      {' '}
      <Flex as="button" alignItems="center" onClick={goBack}>
        <ArrowBackIcon boxSize={4} mr={2} /> Go Back
      </Flex>
      <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDir="column" gap={4} mx="auto" w="100%" maxW="480px">
          <FormControl>
            <FormLabel fontSize="md" color="gray.600">
              Title
            </FormLabel>
            <Input
              placeholder="Choose your title"
              defaultValue={data.title}
              {...register('title')}
            />
          </FormControl>

          <FormControl>
            <FormLabel fontSize="md" color="gray.600">
              Content
            </FormLabel>

            <Textarea
              placeholder="Type your post content"
              defaultValue={data.content}
              {...register('content')}
            />
          </FormControl>
          <Button w="100%" type="submit">
            Confirm
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
