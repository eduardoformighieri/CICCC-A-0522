import { Spinner, Flex, Text, Box, Button, useToast } from '@chakra-ui/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { SyntheticEvent, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deletePost, getPost, likePost } from '../api/posts';
import { Post as IPost } from '../types';
import {
  ArrowBackIcon,
  AddIcon,
  WarningIcon,
  DeleteIcon,
  StarIcon,
  EditIcon,
} from '@chakra-ui/icons';
import { relativeTime } from '../utils/relativeTime';
import { CommentItem } from '../components/CommentItem';
import { CreateComment } from '../components/CreateComment';
import { getStorageByKey } from '../utils/storage';

import { FcLikePlaceholder, FcLike, FcDislike } from 'react-icons/fc';

export const Post = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const toast = useToast();

  const { isLoading, isError, error, data } = useQuery<IPost, Error>(
    ['getPost', postId],
    () => getPost(postId!)
  );

  const goBack = (event: SyntheticEvent) => {
    event.preventDefault();
    navigate(-1);
  };

  const { id } = getStorageByKey<{
    name: string;
    username: string;
    token: string;
    id: number;
  }>('user');

  const { mutate: mutateDeletePost } = useMutation(
    (postId: number) => deletePost(postId),
    {
      onError: () => {
        toast({
          title: 'Try again',
          status: 'error',
          isClosable: true,
          position: 'top-right',
        });
      },
      onSuccess: (data: any) => {
        queryClient.invalidateQueries(['getAllPosts']);
        queryClient.invalidateQueries(['getAllPostsByUser']);
        toast({
          title: 'Post deleted',
          status: 'success',
          isClosable: true,
          position: 'top-right',
        });
        navigate('/posts');
      },
    }
  );

  const { mutate: mutateLikePost } = useMutation(
    (postId: number) => likePost(postId),
    {
      onError: () => {
        toast({
          title: 'Try again',
          status: 'error',
          isClosable: true,
          position: 'top-right',
        });
      },
      onSuccess: (data: any) => {
        queryClient.invalidateQueries(['getAllPosts']);
        queryClient.invalidateQueries(['getAllPostsByUser']);
        toast({
          title: 'Post liked',
          status: 'success',
          isClosable: true,
          position: 'top-right',
        });
      },
    }
  );

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
      <Box>
        <Flex as="button" alignItems="center" onClick={goBack}>
          <ArrowBackIcon boxSize={4} mr={2} /> Go Back
        </Flex>
        <Box pt={8}>
          {data.userId === id ? (
            <Flex flexDir="column" gap={2}>
              <Button
                w="100%"
                as="button"
                alignItems="center"
                onClick={() => mutateDeletePost(data.id)}>
                <DeleteIcon boxSize={4} mr={2} /> Delete Post
              </Button>
              <Button
                w="100%"
                as={Link}
                alignItems="center"
                to={`/editPost/${postId}`}>
                <EditIcon boxSize={4} mr={2} /> Edit Post
              </Button>
            </Flex>
          ) : null}
          <Flex mt={8} w="100%" justify="space-between">
            <Text fontSize="lg" fontWeight="bold" color="gray.100">
              {data.title}
            </Text>
            {/* <Flex
              as="button"
              gap={2}
              alignItems="center"
              onClick={() => mutateLikePost(data.id)}>
              <Text>Like post</Text> <FcLikePlaceholder size={16} />
            </Flex> */}
          </Flex>

          <Text
            borderRadius="16px"
            border="1px solid white"
            px={4}
            pb={8}
            pt={4}
            mt={4}
            mb={1}
            fontSize="md"
            fontWeight="semibold"
            color="gray.300"
            maxW="100%"
            whiteSpace="pre-wrap">
            {data.content}
          </Text>
          <Flex fontSize="sm" color="gray.500" gap={2}>
            <Text>
              {!!data.comments?.length ? data.comments?.length : 0} comments ·
            </Text>
            <Text>{!!data.likes?.length ? data.likes?.length : 0} likes ·</Text>
            <Text>{data.user.username} ·</Text>
            <Text>{relativeTime(data.updatedAt)}</Text>
          </Flex>
        </Box>
      </Box>
      <Box pt={16}>
        <Text mb={2} fontSize="md" fontWeight="semibold" color="gray.300">
          Comments
        </Text>
        <CreateComment postId={data.id} />
        {data?.comments.map((comment: any) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </Box>
    </Box>
  );
};
