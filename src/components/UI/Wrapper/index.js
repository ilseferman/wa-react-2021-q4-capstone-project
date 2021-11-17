import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './styles';

const Wrapper = function ({ children, cols }) {
  return <StyledWrapper cols={cols}>{children}</StyledWrapper>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  cols: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Wrapper;
