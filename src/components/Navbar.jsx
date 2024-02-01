import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => (
  <Stack
    direction='row'
    alignItems='center'
    p={0}
    sx={{
      position: 'sticky',
      background: '#0e0e0f',
      top: 0,
      justifyContent: 'space-between',
    }}
  >
    <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
      <img src='/logo-2.png' alt='logo' width={150} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
