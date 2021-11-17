import React from 'react';
import PropTypes from 'prop-types';
import { StyledRow } from './styles';

const Row = function ({
  children,
  columns = '1fr 4fr 4fr 2fr 2fr 1fr',
  justify = 'center'
}) {
  return (
    <StyledRow columns={columns} justify={justify}>
      {children}
    </StyledRow>
  );
};

Row.defaultProps = {
  columns: '1fr 4fr 4fr 2fr 2fr 1fr',
  justify: 'center'
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.string,
  justify: PropTypes.string
};

export default Row;
