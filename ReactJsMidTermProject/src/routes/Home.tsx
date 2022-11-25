import { Box, Text } from '@chakra-ui/react';
import { Pagination } from '../components/Pagination';

export function Home() {
  return (
    <Box
      mt={{ base: '10', lg: '20' }}
      mx={{ base: '4', lg: '8', xl: '24', '2xl': '32' }}>
      <Text fontFamily="RobotoBold" fontSize="4xl">
        Characters List
      </Text>
      <Pagination />
    </Box>
  );
}
