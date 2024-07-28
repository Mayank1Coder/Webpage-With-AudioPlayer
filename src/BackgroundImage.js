import React from 'react';

const BackgroundImage = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://picsum.photos/200/300')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};
export default BackgroundImage;