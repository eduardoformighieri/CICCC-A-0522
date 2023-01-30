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
import { createComment } from '../api/comments';
import { CreateCommentDto } from '../types';
import { setStorage } from '../utils/storage';

interface CreateCommentProps {
  postId: number;
}

export const CreateComment = ({ postId }: CreateCommentProps) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const { handleSubmit, register } = useForm<CreateCommentDto>();

  const { mutate } = useMutation(
    (formData: CreateCommentDto) => createComment(formData, postId),
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
        queryClient.invalidateQueries(['getPost']);
        toast({
          title: 'Comment created',
          status: 'success',
          isClosable: true,
          position: 'top-right',
        });
      },
    }
  );

  const onSubmit = (inputValues: CreateCommentDto) => {
    mutate(inputValues);
  };

  return (
    <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDir="column" gap={4} w="100%">
        <FormControl>
          <FormLabel fontSize="md" color="gray.600">
            Content
          </FormLabel>

          <Textarea
            placeholder="Type your comment here..."
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
