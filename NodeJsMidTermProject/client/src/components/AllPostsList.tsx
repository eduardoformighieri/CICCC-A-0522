import { Flex, Spinner, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getAllPosts } from '../api/posts';
import { Post } from '../types';
import { PostItem } from './PostItem';

type AllPostsListProps = {};

export const AllPostsList = ({}: AllPostsListProps) => {
  const { isLoading, isError, error, data } = useQuery<Post[], Error>(
    ['getAllPosts'],
    () => getAllPosts()
  );

  if (isLoading) {
    return <Spinner size="xl" />;
  }
  if (isError) {
    return (
      <Flex w="100%" justifyContent="center" py="70px">
        <Text fontFamily="SourceSansProSemiBold" fontSize="2xl">
          Error getting all posts:
        </Text>
        <Text mt={2}>{error.message}</Text>
      </Flex>
    );
  }

  return (
    <Flex
      textAlign="left"
      w="100%"
      flexDir="column"
      gap={4}
      alignItems="center">
      {data?.map((post: Post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </Flex>
  );
};
