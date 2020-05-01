import React from 'react';

import { Container } from './styles';

import supportImage from '../../assets/images/support.svg';

export default function Support() {
  return (
    <Container>
      <div>
        <div>
          <div id='supportContent'>
            <h3>Apoio</h3>
            <p>
              Aqui se encontra todas as instituições que acredita na capacidade
              do Mia Ajuda em melhorar a vida das pessoas através da
              solidariedade.
            </p>
          </div>
          <div>
            <img src={supportImage} alt='support' />
          </div>
        </div>
        <div id='supporterContent'>
          <div>
            <h3>Apoiadores</h3>
          </div>
        </div>
      </div>
    </Container>
  );
}
