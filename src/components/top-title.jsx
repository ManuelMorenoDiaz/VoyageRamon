import React from 'react';
import '../styles/top-title.css';

const TopTitle = (props) => {
  return (
    <div className='containerStyle' style={{ backgroundImage: `url("${props.imagen}")` }}>
      <div className='overlayStyle'></div>
      <div className='textStyle'>
        <h2 className='titulo'>{props.lugar}</h2>
        {props.desc != null && <p>{props.desc}</p>}
      </div>
    </div>
  );
};

export default TopTitle;
