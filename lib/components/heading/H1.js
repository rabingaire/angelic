import React from 'react';
import PropTypes from 'prop-types';

const H1 = ({text, tabindex, arialabel}) => (
  <h1 tabindex={tabindex} aria-label={arialabel}>{text}</h1>
);

H1.propTypes = {
  text: PropTypes.string.isRequired,
  tabindex: PropTypes.string.isRequired,
  arialabel: PropTypes.string.isRequired,
};

export default H1;
