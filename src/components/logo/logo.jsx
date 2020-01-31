import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './logo.css';

const Logo = ({ className }) => (
  <div className={clsx('app-main-logo', className.toString())} />
);

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Logo;
