import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './image-card.css';

const ImageCard = ({ src, alt, className }) => (
  <div className={clsx('image-card', className)}>
    <div className="image">
      <img src={src} alt={alt} />
    </div>
  </div>
);

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default ImageCard;
