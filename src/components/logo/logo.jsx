import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './logo.css';

const Logo = ({ className, animate = false, mini = false }) => (
  <div className={clsx('logo', className, animate && 'animate')}>
    <FontAwesomeIcon icon="robot" className="logo-icon" />
    {!mini && <h6 className="logo-text">ROBOBEE</h6>}
  </div>
);

Logo.propTypes = {
  className: PropTypes.string,
  animate: PropTypes.bool,
  mini: PropTypes.bool,
};
export default Logo;
