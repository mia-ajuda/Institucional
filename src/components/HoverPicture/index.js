import React from 'react';
import './style.css';

export default function HoverPicture({ name, image, link }) {
  return (
    <div className='picture'>
      <div className='backdrop'>
        <p className='name' style={{ cursor: link ? 'pointer' : 'default' }}>
          {name}
        </p>
      </div>
      <img className='image' src={image} alt={name} />
    </div>
  );
}
