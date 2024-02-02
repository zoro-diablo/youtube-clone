import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { useQuery } from 'react-query';
import { fetchFromApi } from '../utils/fetchFromApi';
import ChannelCard from '../components/ChannelCard';
import Videos from '../components/Videos';
import Loader from '../components/Loader';
import ErrorPage from '../components/ErrorPage';

const ChannelDetail = () => {
  const { id } = useParams();

  const {
    data: channelDetail,
    isLoading: channelLoading,
    isError: channelError,
  } = useQuery(['channel', id], async () => {
    const data = await fetchFromApi(`channels?part=snippet&id=${id}`);
    return data?.items[0];
  });

  const {
    data: videos,
    isLoading: videosLoading,
    isError: videosError,
  } = useQuery(['videos', id], async () => {
    const videosData = await fetchFromApi(
      `search?channelId=${id}&part=snippet%2Cid&order=date`
    );
    return videosData?.items;
  });

  if (channelLoading || videosLoading) return <Loader />;
  if (channelError || videosError) return <ErrorPage />;

  return (
    <Box minHeight='95vh'>
      <Box>
        <div
          style={{
            height: '300px',
            background:
              'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-93px' />
      </Box>
      <Box p={2} display='flex'>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
