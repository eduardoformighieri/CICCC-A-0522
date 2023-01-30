import { SignInDto, SignUpDto } from '../types';
import { api } from './';

export const signIn = async (signInData: SignInDto) => {
  const { data } = await api.post('/signin', signInData);
  return data;
};

export const signUp = async (signUpData: SignUpDto) => {
  console.log(signUpData);

  const { data } = await api.post('/signUp', signUpData);
  return data;
};
