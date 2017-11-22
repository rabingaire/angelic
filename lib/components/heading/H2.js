import React from 'react';
import PropTypes from 'prop-types';

const H2 = ({text, tabindex, arialabel}) => (
  <h2 tabindex={tabindex} aria-label={arialabel}>{text}</h2>
);

H2.propTypes = {
  text: PropTypes.string.isRequired,
  tabindex: PropTypes.string.isRequired,
  arialabel: PropTypes.string.isRequired,
};

export default H2;
