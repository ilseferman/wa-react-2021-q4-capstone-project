import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './styles';

const Title = function ({ title }) {
  return <StyledTitle>{title}</StyledTitle>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
