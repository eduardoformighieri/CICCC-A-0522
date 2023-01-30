import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../api/auth';
import { SignInDto } from '../types';
import { setStorage } from '../utils/storage';

export const SignIn = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<SignInDto>();

  const { mutate } = useMutation((formData: SignInDto) => signIn(formData), {
    onError: (error: AxiosError<{ message: string }>) => {
      toast({
        title: 'Try again',
        status: 'error',
        isClosable: true,
        position: 'top-right',
      });
    },
    onSuccess: (data) => {
      setStorage('user', data);
      toast({
        title: 'You logged',
        status: 'success',
        isClosable: true,
        position: 'top-right',
      });
      navigate('/posts');
    },
  });

  const onSubmit = (inputValues: SignInDto) => {
    mutate(inputValues);
  };

  return (
    <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDir="column" gap={4} mx="auto" w="100%" maxW="480px">
        <FormControl>
          <FormLabel fontSize="md" color="gray.600">
            Username
          </FormLabel>
          <Input placeholder="Type your username" {...register('username')} />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="md" color="gray.600">
            Password
          </FormLabel>

          <Input
            type="password"
            placeholder="Type your password"
            {...register('password')}
          />
        </FormControl>
        <Button w="100%" type="submit">
          Confirm
        </Button>
      </Flex>
    </form>
  );
};
