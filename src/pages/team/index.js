import React from 'react';

import { Container } from './styles';

import teamImage from '../../assets/images/team.svg';
import members from '../../utils/members';

export default function Team() {
  return (
    <Container>
      <div>
        <div>
          <div id='teamContent'>
            <h3>Equipe</h3>
            <p>
              O Mia Ajuda é um projeto de cunho solidário, sem fins lucrativos,
              criado e desenvolvido por professores e estudantes da Faculdade do
              Gama (FGA), da Universidade de Brasília (UnB).
            </p>
          </div>
          <div>
            <img src={teamImage} alt='team' />
          </div>
        </div>
        <div id='membersContent'>
          <h3>Membros</h3>
          <div className='card-container'>
            {members.map((member, idx) => (
              <img src={member} alt='membro' key={idx} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
