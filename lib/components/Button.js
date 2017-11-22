import React from 'react';
import PropTypes from 'prop-types';

const Button = ({type, text, tabindex, arialabel}) => (
    <button type={type} tabindex={tabindex} aria-label={arialabel}>{text}</button>
);

Button.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    tabindex: PropTypes.string,
    arialabel: PropTypes.string.isRequired,
};

export default Button;