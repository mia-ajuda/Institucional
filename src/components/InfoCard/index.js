import React from 'react';
import { Container } from './styles';

export default function InfoCard({ title, color, text }) {
  
  return(
    <Container>
      <div className={`card-${color}`}>
        <h3>
          {title}
        </h3>
        <p>
          {text}
        </p>
      </div>
    </Container>
  );
}