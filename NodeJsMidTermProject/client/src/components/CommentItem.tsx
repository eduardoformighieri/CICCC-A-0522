import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Comment } from '../types';
import { relativeTime } from '../utils/relativeTime';

interface CommentItemProps {
  comment: Comment;
}

export const CommentItem = ({ comment }: CommentItemProps) => (
  <Box p={4} w="100%" maxW="800px">
    <Text fontSize="sm" color="gray.100">
      {comment.user.username}
    </Text>

    <Text
      fontSize="xs"
      color="gray.500"
      maxW="100%"
      overflow="hidden"
      whiteSpace="nowrap"
      textOverflow="ellipsis">
      {comment.content}
    </Text>

    <Text fontSize="xs" color="gray.600">
      {relativeTime(comment.createdAt)}
    </Text>
  </Box>
);
