/* --- libs ---*/
import React from 'react';

/* --- component ---*/
import { Logo } from '../logo/logo.component';

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
    </div>
  </header>
);
