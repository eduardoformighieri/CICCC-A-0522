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
import { signIn, signUp } from '../api/auth';
import { SignUpDto } from '../types';
import { setStorage } from '../utils/storage';

export const SignUp = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<
    SignUpDto & { confirmPassword: string }
  >();

  const { mutate } = useMutation((formData: SignUpDto) => signUp(formData), {
    onError: (error: AxiosError<{ message: string }>) => {
      toast({
        title: 'Try again',
        status: 'error',
        isClosable: true,
        position: 'top-right',
      });
    },
    onSuccess: (data) => {
      toast({
        title: 'Account created',
        status: 'success',
        isClosable: true,
        position: 'top-right',
      });
    },
  });

  const onSubmit = (inputValues: SignUpDto & { confirmPassword: string }) => {
    if (inputValues.password === inputValues.confirmPassword) {
      mutate({
        name: inputValues.name,
        username: inputValues.username,
        password: inputValues.password,
      });
    } else {
      toast({
        title: 'Password must match',
        status: 'error',
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  return (
    <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDir="column" gap={4} mx="auto" w="100%" maxW="480px">
        <FormControl>
          <FormLabel fontSize="md" color="gray.600">
            Username
          </FormLabel>
          <Input placeholder="Choose your username" {...register('username')} />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="md" color="gray.600">
            Name
          </FormLabel>
          <Input placeholder="Choose your username" {...register('name')} />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="md" color="gray.600">
            Password
          </FormLabel>

          <Input
            type="password"
            placeholder="Choose your password"
            {...register('password')}
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize="md" color="gray.600">
            Confirm your password
          </FormLabel>

          <Input
            type="password"
            placeholder="Confirm your password"
            {...register('confirmPassword')}
          />
        </FormControl>

        <Button w="100%" type="submit">
          Confirm
        </Button>
      </Flex>
    </form>
  );
};
