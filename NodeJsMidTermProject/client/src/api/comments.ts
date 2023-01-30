import { Comment, CreateCommentDto } from '../types';
import { getStorageByKey } from '../utils/storage';
import { api } from './';

const { token } = getStorageByKey<{
  name: string;
  username: string;
  token: string;
  id: number;
}>('user');

export const createComment = async (
  { content }: CreateCommentDto,
  postId: number
) => {
  const { data } = await api.post(
    `/comments/${postId}`,
    { content },
    {
      headers: { 'x-access-token': token },
    }
  );
  return data;
};

export const deleteComment = async ({
  commentId,
}: {
  token: string;
  commentId: string;
}) => {
  const { data } = await api.delete(`/comments/${commentId}`, {
    headers: { 'x-access-token': token },
  });
  return data;
};

// export const likeComment = async ({
//   commentId,
// }: {
//   token: string;
//   commentId: string;
// }) => {
//   const { data } = await api.post(`/comments/${commentId}/likeComment`, {
//     headers: { 'x-access-token': token },
//   });
//   return data;
// };

// export const dislikeComment = async ({
//   commentId,
// }: {
//   token: string;
//   commentId: string;
// }) => {
//   const { data } = await api.delete(`/comments/${commentId}/dislikeComment`, {
//     headers: { 'x-access-token': token },
//   });
//   return data;
// };
