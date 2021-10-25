import React from 'react';
import { StyledCard } from './styles';

function Card({ children, padding }) {
  return <StyledCard padding={padding}>{children}</StyledCard>;
}

export default Card;
