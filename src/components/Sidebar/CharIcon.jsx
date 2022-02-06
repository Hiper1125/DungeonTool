import React from 'react';

const CharIcon = ({name}) => {
  let icon = require(`../../assets/icons/${name}.png`);

  return <div className='character-icon h-3 w-auto'>
    <img src={icon} alt={name} className='cursor-pointer' />
  </div>;
};

export default CharIcon;
