import React from 'react';

import { Container } from './styles';

export default function LogoCard({ name, link, logo }) {
  return (
    <Container >
      <div className='image-container'>
        <img
          src={logo}
          alt='logo'
          style={{ width: '80%'}}
        />
      </div>
      <div className='link-container'>
        <a
          href={link}
          target='blank'
        >
          {name}
        </a>
      </div>
    </Container>
  );
}