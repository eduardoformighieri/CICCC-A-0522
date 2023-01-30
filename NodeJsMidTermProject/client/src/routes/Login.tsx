import {
  FormErrorMessage,
  Input,
  Box,
  FormControl,
  FormLabel,
  Flex,
  Text,
  InputGroup,
  InputRightElement,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useToast,
} from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../api/auth';
import { SignIn } from '../components/SignIn';
import { SignUp } from '../components/SignUp';
import { SignInDto } from '../types';
import { setStorage } from '../utils/storage';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const positions = [
    'top',
    'top-right',
    'top-left',
    'bottom',
    'bottom-right',
    'bottom-left',
  ];
  const statuses = ['success', 'error', 'warning', 'info'];
  const navigate = useNavigate();

  const { handleSubmit, register } = useForm();

  const { isLoading, mutate } = useMutation(
    (formData: SignInDto) => signIn(formData),
    {
      onError: (error: AxiosError<{ message: string }>) => {
        toast({
          title: 'Try again',
          status: 'error',
          isClosable: true,
          position: 'top-right',
        });
      },
      onSuccess: (data: { token: string; isProfileCompleted: boolean }) => {
        setStorage('user', data);
        toast({
          title: 'You logged',
          status: 'success',
          isClosable: true,
          position: 'top-right',
        });
        navigate('/posts');
      },
    }
  );

  const onSubmit = (inputValues: SignInDto) => {
    mutate(inputValues);
  };

  return (
    <Tabs mt={8} align="center" variant="enclosed">
      <TabList>
        <Tab>Sign In</Tab>
        <Tab>Sign Up</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <SignIn />
        </TabPanel>
        <TabPanel>
          <SignUp />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
