import React from 'react';
import PropTypes from 'prop-types';

const Img = ({alt, src, height, width, tabindex, arialabel}) => (
    <img src={src} alt={alt} height={height} width={width} tabindex={tabindex} arialabel={arialabel}/>
);

Img.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    height: PropTypes.string,
    width: PropTypes.string,
    tabindex: PropTypes.string,
    arialabel: PropTypes.string.isRequired,
};

export default Img;