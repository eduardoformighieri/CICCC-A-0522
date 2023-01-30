import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../api/posts';
import { CreatePostDto } from '../types';
import { setStorage } from '../utils/storage';

export const CreatePost = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<CreatePostDto>();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    (formData: CreatePostDto) => createPost(formData),
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

  const onSubmit = (inputValues: CreatePostDto) => {
    mutate(inputValues);
  };

  return (
    <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDir="column" gap={4} mx="auto" w="100%" maxW="480px">
        <FormControl>
          <FormLabel fontSize="md" color="gray.600">
            Title
          </FormLabel>
          <Input placeholder="Choose your title" {...register('title')} />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="md" color="gray.600">
            Content
          </FormLabel>

          <Textarea
            placeholder="Type your post content"
            {...register('content')}
          />
        </FormControl>
        <Button w="100%" type="submit">
          Confirm
        </Button>
      </Flex>
    </form>
  );
};
