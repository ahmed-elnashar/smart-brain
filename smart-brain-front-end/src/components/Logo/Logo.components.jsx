import React from 'react';
import Tilt from 'react-tilt';
import logo from './Logo.png';

const Logo = () => {
  return (
    <div className='ma4 mt4'>
      <Tilt
        className='Tilt br2 shadow-2'
        options={{ max: 25 }}
        style={{ height: 100, width: 100 }}
      >
        <div className='Tilt-inner tc'>
          <img src={logo} style={{width: '100%'}} alt='brain logo' />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
