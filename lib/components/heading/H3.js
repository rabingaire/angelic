import React from 'react';
import PropTypes from 'prop-types';

const H3 = ({text, tabindex, arialabel}) => (
  <h3 tabindex={tabindex} aria-label={arialabel}>{text}</h3>
);

H3.propTypes = {
  text: PropTypes.string.isRequired,
  tabindex: PropTypes.string.isRequired,
  arialabel: PropTypes.string.isRequired,
};

export default H3;
