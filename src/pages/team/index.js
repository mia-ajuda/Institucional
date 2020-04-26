import React from 'react'

import {
    Container,
  } from "./styles";

import teamImage from "../../assets/images/team.svg"


export default function Team() {
    return(
        <Container>
            <div>
                <div>
                    <div id="supportContent">
                        <h1>Equipe</h1>
                        <p>O Mia Ajuda é um projeto de cunho solidário, sem fins lucrativos, criado e desenvolvido por professores e estudantes da Faculdade do Gama (FGA), da Universidade de Brasília (UnB)</p>
                    </div>
                    <div>
                        <img src={teamImage} alt="team" />
                    </div>
                </div>
                <div id="supporterContent">
                    <div>
                        <h1>Membros</h1>
                    </div>
                </div>
            </div>
        </Container>
    );
}