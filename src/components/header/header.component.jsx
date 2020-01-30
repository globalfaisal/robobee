/* --- libs ---*/
import React from 'react';

/* --- component ---*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logo } from '../logo/logo.component';

/* --- fa ---*/
/* --- styles ---*/
import './header.styles.css';

export const Header = () => (
  <header className="header">
    <div className="hero">
      <div className="hero-logo">
        <Logo />
      </div>
      <h2 className="hero-heading">
        Robots there’s more to
        <br /> them than meets the eye.
      </h2>
      <a href="#" className="scroll-link">
        <FontAwesomeIcon icon="long-arrow-alt-down" size="2x" />
      </a>
    </div>
  </header>
);
