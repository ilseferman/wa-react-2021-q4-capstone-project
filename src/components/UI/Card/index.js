import React from 'react';
import { StyledCard } from './styles';

function Card({ children, padding, cursor = 'pointer' }) {
  return (
    <StyledCard padding={padding} cursor={cursor}>
      {children}
    </StyledCard>
  );
}

export default Card;
