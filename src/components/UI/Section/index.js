import React from 'react';
import { StyledSection } from './styles';

function Section({ title, children }) {
  return (
    <StyledSection>
      <h3>{title}</h3>
      <div>{children}</div>
    </StyledSection>
  );
}

export default Section;
