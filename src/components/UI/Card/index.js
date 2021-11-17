import React from 'react';
import PropTypes from 'prop-types';
import { StyledCard } from './styles';

const Card = function ({ children, padding, cursor }) {
  return (
    <StyledCard padding={padding} cursor={cursor}>
      {children}
    </StyledCard>
  );
};

Card.defaultProps = {
  padding: 0,
  cursor: 'pointer'
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cursor: PropTypes.string
};

export default Card;
