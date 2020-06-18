import React from 'react';

import { Container } from './styles';
import doarImg from '../../assets/images/doar.png';

function Doar() {
  return (
    <Container>
      <div>
        <div>
          <img style={{ width: '25rem' }} src={doarImg} alt='contact' />
        </div>
        <div id='contactContent'>
          <h3>Doar</h3>
          <p>
            Colabore com essa iniciativa! <br />
            Faça sua doação ao Fundo Covid-19 UnB em Ação, gerido pela FINATEC.{' '}
            <br />
            <a
              target='blank'
              style={{ color: '#4b8ab9' }}
              href='https://noticias.unb.br/76-institucional/4217-unb-cria-fundo-para-doacoes-de-combate-a-covid-19'
            >
              Saiba mais
            </a>
          </p>
          <a
            target='blank'
            className='emailLink'
            href='https://www.finatec.org.br/doacaoprojetos/form/projetodoacao/29'
          >
            Colabore com Mia Ajuda
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Doar;
