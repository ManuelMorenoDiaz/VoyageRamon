import React from 'react';

const TopTitle = (props) => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '300px',
    backgroundImage: `url("${props.imagen}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    marginBottom:'20px'
  };

  const overlayStyle = {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    fontSize: '24px', // Tamaño del texto
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={textStyle}>
        <h1>{props.lugar}</h1>
      </div>
    </div>
  );
};

export default TopTitle;
