import React from 'react';

import { Container } from './styles';

import HoverPicture from '../../components/HoverPicture/index';
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
              Aqui, constam as instituições que acreditam na capacidade do Mia
              Ajuda em melhorar a vida das pessoas através da solidariedade.
            </p>
          </div>
          <div>
            <img id='support-img' src={supportImage} alt='support' />
          </div>
        </div>
        <div id='supporterContent'>
          <h3>Apoiadores</h3>
          <div className='card-container'>
            {supports.map((support, idx) => (
              <a href={support.link} key={idx} target='_black'>
                <HoverPicture name={support.name} image={support.image} link />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
