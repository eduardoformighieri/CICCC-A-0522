import { CreatePostDto, UpdatePostDto } from '../types';
import { getStorageByKey } from '../utils/storage';
import { api } from './';

const storage = getStorageByKey<{
  name: string;
  username: string;
  token: string;
  id: number;
}>('user');

export const getAllPosts = async () => {
  const { data } = await api.get('/posts');
  return data;
};

export const getPost = async (postId: string) => {
  const { data } = await api.get(`/posts/${postId}`);
  return data;
};

export const getAllPostsByUser = async () => {
  const { data } = await api.get(`/posts/users/${storage?.id}`);
  return data;
};

export const createPost = async ({ title, content }: CreatePostDto) => {
  const { data } = await api.post(
    '/posts',
    { title, content },
    {
      headers: { 'x-access-token': storage?.token },
    }
  );
  return data;
};

export const updatePost = async (formData: UpdatePostDto, postId: number) => {
  const { data } = await api.patch(`/posts/${postId}`, formData, {
    headers: { 'x-access-token': storage?.token },
  });
  return data;
};

export const deletePost = async (postId: number) => {
  const { data } = await api.delete(`/posts/${postId}`, {
    headers: { 'x-access-token': storage?.token },
  });
  return data;
};

export const likePost = async (postId: number) => {
  const { data } = await api.post(`/posts/${postId}/likePost`, {
    headers: { 'x-access-token': storage?.token },
  });
  return data;
};

export const dislikePost = async (postId: number) => {
  const { data } = await api.delete(`/posts/${postId}/dislikePost`, {
    headers: { 'x-access-token': storage?.token },
  });
  return data;
};
