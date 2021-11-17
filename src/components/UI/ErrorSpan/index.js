import React from 'react';
import PropTypes from 'prop-types';
import { StyledError } from './styles';

const ErrorSpan = function ({ text }) {
  return <StyledError>{text}</StyledError>;
};

ErrorSpan.propTypes = {
  text: PropTypes.string.isRequired
};

export default ErrorSpan;
