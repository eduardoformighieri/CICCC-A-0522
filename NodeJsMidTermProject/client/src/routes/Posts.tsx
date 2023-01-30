import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AllPostsList } from '../components/AllPostsList';
import { CreatePost } from '../components/CreatePost';
import { MyPostsList } from '../components/MyPostsList';

export const Posts = () => (
  <Box>
    <Flex p={4} alignItems="center" as={Link} to="/">
      <ExternalLinkIcon boxSize={4} mr={2} /> Sign Out
    </Flex>
    <Tabs mt={8} align="center" variant="enclosed" isLazy>
      <TabList>
        <Tab>All Posts</Tab>
        <Tab>My Posts</Tab>
        <Tab>Create post</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <AllPostsList />
        </TabPanel>
        <TabPanel>
          <MyPostsList />
        </TabPanel>
        <TabPanel>
          <CreatePost />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
);
