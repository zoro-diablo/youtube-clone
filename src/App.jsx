import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

//Layouts
import RootLayout from './layout/RootLayout';

//Pages
import Feed from './pages/Feed';
import VideoDetail from './pages/VideoDetail';
import ChannelDetails from './pages/ChannelDetails';
import SearchFeed from './pages/SearchFeed';

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index exact element={<Feed />} />
      <Route path='video/:id' element={<VideoDetail />} />
      <Route path='channel/:id' element={<ChannelDetails />} />
      <Route path='search/:searchTerm' element={<SearchFeed />} />
    </Route>
  )
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
};
export default App;
