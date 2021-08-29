import React from 'react';

import { Container } from './styles';

import socialMediaInstagram from '../../assets/images/socialMediaInstagram.png';
import socialMediaYoutube from '../../assets/images/socialMediaYoutube.png';
import instagramImg from '../../assets/images/socialMedias/instagram.png';
import youtubeImg from '../../assets/images/socialMedias/youtube.png';
import contactImage from '../../assets/images/contact.svg';

function SocialMedia() {
  return (
    <Container>
      <div id='contactContainer'>
        <div>
          <img src={contactImage} alt='contact' />
        </div>
        <div id='contactContentRight'>
          <h3>Contato</h3>
          <p>
            Quer sugerir, elogiar, colaborar? 
            Entre em contato com o Mia Ajuda, e faça parte dessa rede solidária!
          </p>
          <a className="emailLink" href = "mailto: miaajudaunb@gmail.com">miaajudaunb@gmail.com</a>
        </div>
      </div>

      <div>
        <div id='contactContent'>
          <h3>Mia Ajuda no Instagram!</h3>
          <p>
            Confira as novidades! <br/>
            <br/>
            Acesse e faça parte dessa<br/> grande rede solidária! <br/>
            <br/>
          </p>
          <a
            target='blank'
            href='https://www.instagram.com/miaajuda/'
            className='media-button'
            style={{
              backgroundColor: '#3b6f96',
              textDecoration: 'none',
            }}
          >
            <img
              id='logo'
              src={instagramImg}
              alt='instagram'
              style={{ width: '1.5rem', marginRight: '1rem' }}      
            />
            INSTAGRAM
          </a>
        </div>
        <div>
          <img style={{ width: '28rem' }} src={socialMediaInstagram} alt='instagram' />
        </div>
      </div>
      <div>
        <div>
          <img style={{ width: '30rem' }} src={socialMediaYoutube} alt='youtube' />
        </div>
        <div id='contactContentRight'>
          <h3>Mia Ajuda no YouTube!</h3>
          <p>
            Confira as novidades! <br/>
            <br/>
            Inscreva-se no canal!<br/>
            Deixe o seu like!<br/>
            Divulgue!<br/>
            <br/>
            Conheça nossa Playlist, em:
            <br/>
          </p>
          <a
            target='blank'
            href='https://www.youtube.com/channel/UCD_G2U7UEyUXMP7QGisx7sg'
            className='media-button'
            style={{
              backgroundColor: '#3b6f96',
              textDecoration: 'none'
            }}
          >
            <img
              id='logo'
              src={youtubeImg}
              alt='instagram'
              style={{ width: '1.5rem', marginRight: '1rem' }}      
            />
            YOUTUBE
          </a>
        </div>
      </div>
    </Container>
  );
}

export default SocialMedia;
