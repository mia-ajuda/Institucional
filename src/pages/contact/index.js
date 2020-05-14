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
          <a className="emailLink" href = "mailto: miaajudaunb@gmail.com">miaajudaunb@gmail.com</a>
        </div>
      </div>
    </Container>
  );
}
