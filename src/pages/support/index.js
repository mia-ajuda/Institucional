import React from 'react';

import { Container } from './styles';

import supportImage from '../../assets/images/support.svg';
import supports from '../../utils/support';

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
          <h3>Apoiadores</h3>
          <div className='card-container'>
            {supports.map((support, idx) => (
              <img src={support} alt='membro' key={idx} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
