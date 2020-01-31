import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logo } from '../../components/logo/logo';

import './home.css';

export const Home = () => (
  <header className="home-page">
    <div className="hero">
      <div className="hero-logo">
        <Logo />
      </div>
      <h2 className="hero-heading">
        Robots there’s more to
        <br /> them than meets the eye.
      </h2>
      <Link to="#intro-section" className="scroll-link">
        <FontAwesomeIcon icon="long-arrow-alt-down" size="2x" />
      </Link>
    </div>
  </header>
);
