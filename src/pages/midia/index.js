import React  from 'react';

import { Container } from './styles';
import { news } from '../../utils/news';

import MidiaImg from '../../assets/images/midiaImg.png';
import NewsContainer from '../../components/NewsContainer';

export default function Midia() {
  return (
    <Container>
      <section className='presentation-section'>
        <div id='textSideContent'>
          <h3>Mia Ajuda na Mídia!</h3>
          <p>
            O Mia Ajuda está cada vez mais<br/>conhecido!<br/>
            <br/>
            Seguem nossas participações!
            <br/>
          </p>
        </div>
        <div>
          <img style={{ width: '28rem' }} src={MidiaImg} alt='midia' />
        </div>
      </section>
      <section className='news-section'>
        {
          news.map(
            ({
              index,
              title,
              data,
              link,
              logo
            }) => {
              return (
                <NewsContainer
                  key={index}
                  title={title}
                  data={data}
                  logo={logo}
                  link={link}
                />
              );
            }
          )
        }
      </section>
      <section className='ending-section'>
        <h3>
          Ajude-nos a divulgar nossas participações, tornando o Mia Ajuda ainda mais conhecido!
        </h3>
      </section>
    </Container>
  );
};