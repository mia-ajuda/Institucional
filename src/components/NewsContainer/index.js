import React from 'react';

import { Container } from './styles';

export default function NewsContainer({
  title,
  data,
  link,
  logo  
  }) {
  return (
    <Container>
      <section>
        <h3>
          {title}
        </h3>
        <section className='news-info'>
          <div id='dataInformation' >
            {
              data.map((item) => {
                return (
                  <p>
                    {item}
                  </p>
                )}
              )
            }
            <a className='news-link' href={link} target='blank'>
              Acesse aqui
            </a>
          </div>
          <div id='newsLogo'>
            <img
              src={logo}
              style={{ width: '15rem' }}
              alt='newsImage'
            />
          </div>
        </section>
      </section>
    </Container>
  );
}