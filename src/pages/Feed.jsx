import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SideBar from '../components/SideBar';
import Videos from '../components/Videos';
import { useQuery } from 'react-query';
import { fetchFromApi } from '../utils/fetchFromApi';
import Loader from '../components/Loader';
import ErrorPage from '../components/ErrorPage';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');

  const {
    data: videos,
    isLoading,
    isError,
  } = useQuery(['videos', selectedCategory], () =>
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
  );

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '95vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright © 2024 YouTube Media
        </Typography>
      </Box>
      {isLoading ? (
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
          <Loader />
        </Box>
      ) : isError ? (
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
          <ErrorPage />
        </Box>
      ) : (
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
          <Typography
            variant='h5'
            fontWeight='bold'
            mb={2}
            sx={{ color: 'white' }}
          >
            {selectedCategory} <span style={{ color: '#FC1503' }}>videos</span>
          </Typography>

          <Videos videos={videos.items} />
        </Box>
      )}
    </Stack>
  );
};

export default Feed;
