import React from 'react';
import PropTypes from 'prop-types';

const Input = ({type, tabindex, arialabel, ariarequired}) => (
    <input type={type} tabindex={tabindex} aria-label={arialabel} aria-required={ariarequired} />
);

Input.propTypes = {
    type: PropTypes.string.isRequired,
    tabindex: PropTypes.string,
    arialabel: PropTypes.string.isRequired,
    ariarequired: PropTypes.string,
};

export default Input;