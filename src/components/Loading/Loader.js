import React from 'react';
import LoadingBar from './LoadingBar';
import Fog from '../Extra/Fog';

const Loader = () => {
  return <div id='loader' className='loader h-screen w-screen relative overflow-hidden z-[1000]'>
  <LoadingBar />
  </div>;
};

export default Loader;
