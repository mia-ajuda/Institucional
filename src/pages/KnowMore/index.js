import React from 'react';
import Carousel from 'react-elastic-carousel';

import { Container } from './styles';

import InfoCard from '../../components/InfoCard';
import LogoCard from '../../components/LogoCard';
import { actions, otherActions } from '../../utils/actions';
import knowMoreImage from '../../assets/images/knowMoreImg.png';

export default function KnowMore() {
  return (
    <Container>
      <section className='presentation-section'>
        <div id='imagePart'>
          <img
            src={knowMoreImage}
            alt='knowMore'
            style={{ width: '20rem'}}
          />
        </div>
        <div id='textPart'>
          <h3>Saiba Mais!</h3>
          <p>
            Conheça outras iniciativas que também <br/>colaboram para um mundo mais igualitário e feliz!
          </p>
        </div>
      </section>
      <section className='actions-section'>
        <div id='carousel'>
          <h3>
          Ações Solidárias
          </h3>
          <Carousel
            itemsToShow={3}
            showArrows={false}
          >
            <div className='text-card'>
              <h3>
                Algumas Ações
              </h3>
              <p>
                Conheça outras iniciativas que também colaboram para um mundo mais igualitário e feliz!
                <br/><br/>
                Divulguem!<br/><br/>
                Participem dessa rede solidária!<br/>
              </p>
            </div>
            {
              actions.map(({
                name,
                link,
                logo,
                id
              }) => {
                return (
                  <LogoCard 
                    key={id}
                    name={name}
                    link={link}
                    logo={logo}
                  />
                )
              })
            }
          </Carousel>
        </div>
        <div id='carousel'>
          <h3>
            Projetos Socias
          </h3>
          <Carousel
            itemsToShow={2}
            showArrows={false}
          >
            {
              otherActions.map(
                ({
                  id,
                  title,
                  text
                }) => {

                  let color;
                  id % 2 === 1 ? color = 'white' : color = 'blue';

                  return (
                  <InfoCard
                    key={id}
                    title={title}
                    text={text}
                    color={color}
                  />)
                  ;
                }
              )
            }
          </Carousel>
        </div>
        <div className='covid-part'>
          <h3>
          Covid-19
          </h3>
          <div className='covid-info'>
            <div>
              <p>
              Seguem algumas dicas de portais que conferem boas leituras bem como informações muito atuais, incluindo sobre a Covid-19.
              </p>
            </div>
            <div>
              <ul>
                <li>
                  <a href='https://www.paho.org/pt/covid19' target='blanck'> https://www.paho.org/pt/covid19</a>
                </li>
                <li>
                  <a href='https://covid.saude.gov.br/' target='blanck'>https://covid.saude.gov.br/</a>
                </li>
                <li>
                  <a href='https://www.gov.br/saude/pt-br' target='blanck'>https://www.gov.br/saude/pt-br</a>
                </li>
                <li>
                  <a href='http://www.coronavirus.df.gov.br/index.php/perguntas-frequentes/' target='blanck'> http://www.coronavirus.df.gov.br/index.php/perguntas-frequentes/</a>
                </li>
              </ul>
            </div>
          </div>
          <h3>
          A Equipe Mia Ajuda deseja boas leituras!
          </h3>
        </div>
      </section>
    </Container>
  );
};