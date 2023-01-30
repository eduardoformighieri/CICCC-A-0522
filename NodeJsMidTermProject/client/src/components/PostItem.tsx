import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Post } from '../types';
import { relativeTime } from '../utils/relativeTime';

interface PostItemProps {
  post: Post;
}

export const PostItem = ({ post }: PostItemProps) => (
  <Box
    as={Link}
    to={`/post/${post.id}`}
    _hover={{ backgroundColor: 'gray.700' }}
    borderRadius="8px"
    p={2}
    w="100%"
    maxW="800px">
    <Text fontSize="lg" fontWeight="bold" color="gray.100">
      {post.title}
    </Text>

    <Text
      fontSize="md"
      fontWeight="semibold"
      color="gray.300"
      maxW="100%"
      overflow="hidden"
      whiteSpace="nowrap"
      textOverflow="ellipsis">
      {post.content}
    </Text>
    <Flex fontSize="sm" color="gray.500" gap={2}>
      <Text>
        {!!post.comments?.length ? post.comments?.length : 0} comments ·
      </Text>
      <Text>{!!post.likes?.length ? post.likes?.length : 0} likes ·</Text>
      <Text>{post.user.username} ·</Text>
      <Text>{relativeTime(post.updatedAt)}</Text>
    </Flex>
  </Box>
);
