import React from 'react';

import Logo from '../../components/logo/logo';
import SectionLink from '../../components/section-link/section-link';
import CreateRobot from '../../components/create-robot/create-robot';

import './home.css';

const Home = () => (
  <div className="home-page">
    <header className="header">
      <Logo className="logo" />
      <h2 className="heading">
        Robots there’s more to
        <br /> them than meets the eye.
      </h2>
      <SectionLink targetSectionId="section-demo" />
    </header>
    <section id="section-demo">
      <CreateRobot />
    </section>
  </div>
);
export default Home;
