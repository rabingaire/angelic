import React from 'react';
import PropTypes from 'prop-types';

const H4 = ({text, tabindex, arialabel}) => (
  <h4 tabindex={tabindex} aria-label={arialabel}>{text}</h4>
);

H4.propTypes = {
  text: PropTypes.string.isRequired,
  tabindex: PropTypes.string.isRequired,
  arialabel: PropTypes.string.isRequired,
};

export default H4;
