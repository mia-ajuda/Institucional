import React from 'react';

import { Container } from './styles';

import HoverPicture from '../../components/HoverPicture/index';

import teamImage from '../../assets/images/team.png';
import { currentMembers, oldMembers } from '../../utils/members';

export default function Team() {
  return (
    <Container>
      <div>
        <div className='team-area'>
          <div id='teamContent'>
            <h3>Equipe</h3>
            <p>
              O Mia Ajuda é um projeto de cunho solidário, sem fins lucrativos,
              criado e desenvolvido por professores e estudantes da Faculdade do
              Gama (FGA), da Universidade de Brasília (UnB).
            </p>
          </div>
          <div>
            <img id='team-img' src={teamImage} alt='team' />
          </div>
        </div>
        <div className='membersContent'>
          <h3>Membros Atuais</h3>
          <div className='card-container'>
            {currentMembers.map((member, idx) => (
              <HoverPicture name={member.name} image={member.image} key={idx} />
            ))}
          </div>
        </div>
        <div className='membersContent'>
          <h3>Membros Anteriores</h3>
          <div className='card-container'>
            {oldMembers.map((member, idx) => (
              <HoverPicture name={member.name} image={member.image} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
