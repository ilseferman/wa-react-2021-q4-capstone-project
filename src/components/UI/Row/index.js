import React from 'react';
import { StyledRow } from './styles';

function Row({ 
  children, 
  columns = '1fr 4fr 4fr 2fr 2fr 1fr',
  justify = 'center'
}) {
  return <StyledRow columns={columns} justify={justify}>{children}</StyledRow>;
}

export default Row;
