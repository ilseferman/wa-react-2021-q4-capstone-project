import React from 'react';
import { StyledWrapper } from './styles';

function Wrapper({ children, cols }) {
  return <StyledWrapper cols={cols}>{children}</StyledWrapper>;
}

export default Wrapper;
