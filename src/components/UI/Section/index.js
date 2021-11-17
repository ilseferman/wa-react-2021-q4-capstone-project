import React from 'react';
import PropTypes from 'prop-types';
import { StyledSection } from './styles';

const Section = function ({ title, children }) {
  return (
    <StyledSection>
      <h3>{title}</h3>
      <div>{children}</div>
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Section;
