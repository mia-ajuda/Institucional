import React from "react";

import {
  Container,
  HowToUseList,
  HomeSection,
  Footer,
  HomeBackground,
} from "./styles";

import card1 from "../../assets/images/card1.svg";
import card2 from "../../assets/images/card2.svg";
import card3 from "../../assets/images/card3.svg";
import card4 from "../../assets/images/card4.svg";
import logoTitle from "../../assets/images/logotitle.png";
import headerImg from "../../assets/images/headerimg.svg";

export default function Home() {
  return (
    <Container>
      <header>
        <div>
          <img id="logo" src={logoTitle} alt="logo" />
          <p>Ajude pessoas perto de você e espalhe amor pelo mundo</p>
          <div>INSTALE NO ANDROID</div>
        </div>
        <img id="header-img" src={headerImg} alt="banner" />
      </header>
      <section>
        <h3 className="title">Como o Mia Ajuda funciona</h3>
        <HowToUseList>
          <li>
            <img src={card1} alt="card" />
            <p>
              Vocẽ solicita um pedido de <span>ajuda</span>
            </p>
          </li>
          <li>
            <img src={card2} alt="card" />
            <p>
              Alguem oferece a <span>ajuda</span>
            </p>
          </li>
          <li>
            <img src={card3} alt="card" />
            <p>
              Você aceita a <span>ajuda</span> oferecida
            </p>
          </li>
          <li>
            <img src={card4} alt="card" />
            <p>
              Você é <span>ajudado</span>
            </p>
          </li>
        </HowToUseList>
      </section>
      <HomeBackground>
        <HomeSection>
          <h3>Sobre nós</h3>
          <p>
            O Mia Ajuda foi com o intuito de aproximar pessoas que precisam de
            ajuda com aqueles que desejam contribuir de alguma forma para
            ajudá-las. Toda ajuda é bem-vinda, seja essa não material (ex. uma
            palavra de carinho pode fazer alguém sorrir!), seja essa material
            (ex. alguém pode estar passando fome ou sentindo frio...). Venha
            fazer parte dessa rede social solidária!
          </p>
          <button>Conheça a Equipe</button>
        </HomeSection>
        <HomeSection>
          <h3>Vamos melhorar o mundo?!</h3>
          <p>
            Você é uma empresa ou ONG que deseja ajudar e apoiar essa causa?
            Entre para nossa lista de apoiadores e torne o mundo cada vez melhor
            por meio da solidariedade!
          </p>
          <button>Vire um apoiador</button>
        </HomeSection>
        <Footer></Footer>
      </HomeBackground>
    </Container>
  );
}
