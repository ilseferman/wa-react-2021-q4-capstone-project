import React from 'react';
import { StyledLoading } from './styles';

function Loading() {
  return (
    <StyledLoading>
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledLoading>
  );
}

export default Loading;
