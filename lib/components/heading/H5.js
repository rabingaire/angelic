import React from 'react';
import PropTypes from 'prop-types';

const H5 = ({text, tabindex, arialabel}) => (
  <h5 tabindex={tabindex} aria-label={arialabel}>{text}</h5>
);

H5.propTypes = {
  text: PropTypes.string.isRequired,
  tabindex: PropTypes.string.isRequired,
  arialabel: PropTypes.string.isRequired,
};

export default H5;
