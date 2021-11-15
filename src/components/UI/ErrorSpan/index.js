import React from 'react';
import { StyledError } from './styles';

function ErrorSpan({ text }) {
  return (
    <StyledError>{text}</StyledError>
  );
}

export default ErrorSpan;
