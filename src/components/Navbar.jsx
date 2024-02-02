import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <Stack
      className='navbar'
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
      <div style={{display:'flex',}}>
       
        <Link to='/' style={{ display: 'flex', alignItems: 'center' , marginLeft:'15px' }}>
          <img src='/logo-2.png' alt='logo' width={150} />
        </Link>
      </div>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;