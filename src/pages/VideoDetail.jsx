import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Videos from '../components/Videos';
import Loader from '../components/Loader';
import { useQuery } from 'react-query';
import { fetchFromApi } from '../utils/fetchFromApi';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const VideoDetail = () => {
  const { id } = useParams();

  const { data: videoDetail, isLoading: videoDetailLoading } = useQuery(['videoDetail', id], () =>
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => data.items[0])
  );

  const { data: relatedVideos, isLoading: relatedVideosLoading } = useQuery(['relatedVideos', id], () =>
    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => data.items)
  );

  if (videoDetailLoading || !videoDetail || !videoDetail.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls
            />
            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack
              direction='row'
              justifyContent='space-between'
              sx={{ color: '#fff' }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography sx={{ color: '#fff' }}
                  variant={window.innerWidth <= 600 ? 'subtitle1' : 'h6'}
                >
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
                  />
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7, display:'flex',alignItems:'center',gap:'5px' }}>
                  <ThumbUpIcon sx={{width:'20px'}} />
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        {!relatedVideosLoading && relatedVideos && relatedVideos.length > 0 && (
          <Box
            px={2}
            py={{ md: 1, xs: 5 }}
            justifyContent='center'
            alignItems='center'
          >
            <Videos videos={relatedVideos} direction='column' />
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default VideoDetail;
