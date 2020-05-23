import React from 'react';

// import { Container } from './styles';

import {
  storyOne,
  storyTwo,
  storyThree,
  storyFour,
} from '../../utils/storyBoard';

const containerStyle = {
  paddingTop: '4rem',
  width: '80%',
  margin: '0 auto',
};

const imgStyle = {
  margin: '.5rem',
  width: '20rem',
};

function storyboard() {
  return (
    <div>
      <div style={containerStyle}>
        <h1 style={{ margin: '1rem 0' }}>Story Board 1</h1>
        <div>
          {storyOne.map((story, i) => (
            <img key={i} src={story} alt='story' style={imgStyle} />
          ))}
        </div>
      </div>

      <div style={containerStyle}>
        <h1 style={{ margin: '1rem 0' }}>Story Board 2</h1>
        <div>
          {storyTwo.map((story, i) => (
            <img key={i} src={story} alt='story' style={imgStyle} />
          ))}
        </div>
      </div>

      <div style={containerStyle}>
        <h1 style={{ margin: '1rem 0' }}>Story Board 3</h1>
        <div>
          {storyThree.map((story, i) => (
            <img key={i} src={story} alt='story' style={imgStyle} />
          ))}
        </div>
      </div>

      <div style={containerStyle}>
        <h1 style={{ margin: '1rem 0' }}>Story Board 4</h1>
        <div>
          {storyFour.map((story, i) => (
            <img key={i} src={story} alt='story' style={imgStyle} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default storyboard;
