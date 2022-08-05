import {
  ChakraProvider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import { Home } from './routes/home';
import { Records } from './routes/records';
import { theme } from './theme';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <Tabs isFitted>
        <TabList>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Convert</Tab>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>
            My convertions
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Home />
          </TabPanel>
          <TabPanel>
            <Records />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  </QueryClientProvider>
);
