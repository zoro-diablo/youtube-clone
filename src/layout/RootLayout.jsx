import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RootLayout = () => {
  return (
    <Box sx={{ backgroundColor: '#0e0e0f' }}>
      <Navbar />
      <Outlet />
    </Box>
  );
};
export default RootLayout;
