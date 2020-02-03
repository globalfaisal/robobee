import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './card.css';

const Card = ({ imgSrc, className }) => (
  <div className={clsx('card', className)}>
    <div className="card-media">
      <img src={imgSrc} alt="" />
    </div>
  </div>
);

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Card;
