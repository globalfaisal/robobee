import React from 'react';

import Logo from '../../components/logo/logo';
import SectionLink from '../../components/section-link/section-link';
import Features from '../features/features';

import './home.css';

const Home = () => (
  <div className="home-page">
    <header className="header">
      <Logo className="logo" />
      <h2 className="heading">
        Robots there’s more to
        <br /> them than meets the eye.
      </h2>
      <SectionLink targetSectionId="features" />
    </header>
    <Features />
  </div>
);
export default Home;
