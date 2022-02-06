import React from 'react';
import LoadingBar from './LoadingBar';

const Loader = () => {
  return <div id='loader' className='loader h-screen w-screen relative overflow-hidden z-50'>
  <LoadingBar />
  </div>;
};

export default Loader;
