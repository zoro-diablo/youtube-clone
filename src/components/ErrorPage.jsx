import { Box, Typography, Stack } from '@mui/material';

const ErrorPage = () => (
  <Box minHeight='95vh'>
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      height='80vh'
    >
      <Typography variant='h5' color='error'>
        <p>404 Error , please try again later ¯\_(ツ)_/¯</p>
        <img src='/error.gif' alt='error' className='error-pic' />
      </Typography>
    </Stack>
  </Box>
);

export default ErrorPage;
