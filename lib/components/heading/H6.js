import React from 'react';
import PropTypes from 'prop-types';

const H6 = ({text, tabindex, arialabel}) => (
  <h6 tabindex={tabindex} aria-label={arialabel}>{text}</h6>
);

H6.propTypes = {
  text: PropTypes.string.isRequired,
  tabindex: PropTypes.string.isRequired,
  arialabel: PropTypes.string.isRequired,
};

export default H6;
