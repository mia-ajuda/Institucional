import React, { useState, useRef, useEffect } from 'react';

import {
  Container,
  HowToUseList,
  HomeSection,
  Footer,
  HomeBackground,
} from './styles';

import card1 from '../../assets/images/card1.svg';
import card2 from '../../assets/images/card2.svg';
import card3 from '../../assets/images/card3.svg';
import card4 from '../../assets/images/card4.svg';
import logoTitle from '../../assets/images/logotitle.png';
import headerImg from '../../assets/images/headerimg.svg';

import video from '../../assets/video.mp4';

import Modal from '../../components/Modal/Modal';

export default function Home() {
  const [openedModal, setOpenedModal] = useState(false);
  const refVideo = useRef(null);

  useEffect(() => {
    if (openedModal) {
      refVideo.current.play();
    } else {
      refVideo.current.pause();
      refVideo.current.currentTime = 0;
    }
  }, [openedModal]);

  return (
    <Container>
      <Modal modalClosed={() => setOpenedModal(false)} show={openedModal}>
        <video width='100%' height='100%' ref={refVideo} controls>
          <source src={video} type='video/mp4' />
        </video>
      </Modal>
      <header>
        <div>
          <img id='logo' src={logoTitle} alt='logo' />
          <p>Ajude pessoas perto de você e espalhe amor pelo mundo</p>
          <div>INSTALE NO ANDROID</div>
        </div>
        <img
          id='header-img'
          src={headerImg}
          alt='banner'
          onClick={() => setOpenedModal(true)}
        />
      </header>
      <section>
        <h3 className='title'>Como o Mia Ajuda funciona</h3>
        <HowToUseList>
          <li>
            <img src={card1} alt='card' />
            <p>
              Vocẽ solicita um pedido de <span>ajuda</span>
            </p>
          </li>
          <li>
            <img src={card2} alt='card' />
            <p>
              Alguem oferece a <span>ajuda</span>
            </p>
          </li>
          <li>
            <img src={card3} alt='card' />
            <p>
              Você aceita a <span>ajuda</span> oferecida
            </p>
          </li>
          <li>
            <img src={card4} alt='card' />
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
            O Mia Ajuda foi criado com o intuito de aproximar pessoas que
            precisam de ajuda com aqueles que desejam contribuir de alguma
            forma. Venha fazer parte dessa rede social solidária!
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
        <HomeSection>
          <h3>Faça parte dessa iciativa!</h3>
          <p>
            <strong> Precisa de ajuda? </strong>O Mia Ajuda está aqui! Seu
            pedido pode ser de ajuda não material (ex. entretenimento,
            motivacional e de amparo psicológico) e/ou ainda material (ex.
            recursos essenciais como alimentos, medicamentos e itens de higiene
            pessoal). Seja bem-vindo!
          </p>
          <p>
            <strong> Não sabe como ajudar? </strong>Conte uma história! Toque um
            instrumento musical! Cante para alguém! Encontre um amigo para
            conversar! Recite um poema! Doe um alimento! Colabore como queira! O
            importante é ajudar!
          </p>
          <button className='android'>INSTALE NO ANDROID</button>
        </HomeSection>
        <Footer></Footer>
      </HomeBackground>
    </Container>
  );
}
