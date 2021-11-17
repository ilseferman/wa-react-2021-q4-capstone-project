import React from 'react';
import PropTypes from 'prop-types';
import { StyledFormGroup } from './styles';

const FormGroup = function ({ children }) {
  return <StyledFormGroup>{children}</StyledFormGroup>;
};

FormGroup.propTypes = {
  children: PropTypes.node.isRequired
};

export default FormGroup;
