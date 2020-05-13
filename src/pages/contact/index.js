import React from 'react';

import { Container } from './styles';

import contactImage from '../../assets/images/contact.svg';

export default function Contact() {
  return (
    <Container>
      <div>
        <div>
          <img src={contactImage} alt='contact' />
        </div>
        <div id='contactContent'>
          <h3>Contato</h3>
          <p>
            Quer sugerir, elogiar, colaborar? 
            Entre em contato com o Mia Ajuda, e faça parte dessa rede solidária!
          </p>
          <p style={{ marginTop: '.8rem', color: '#4b8ab9', fontWeight: 'bold' }}>miaajudaunb@gmail.com</p>
        </div>
      </div>
    </Container>
  );
}
