import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRoutes } from './routes';

const queryClient = new QueryClient();

// the search experience consists of the manager and its child components that use SearchContext
export const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppRoutes />
  </QueryClientProvider>
);
