import React from 'react';
import { StyledLoading } from './styles';

const Loading = function () {
  return (
    <StyledLoading>
      <div className="lds-facebook">
        <div />
        <div />
        <div />
      </div>
    </StyledLoading>
  );
};

export default Loading;
