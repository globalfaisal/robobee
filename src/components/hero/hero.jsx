import React from 'react';

import SectionLink from '../section-link/section-link';

import './hero.css';

const Hero = () => (
  <div className="hero">
    <h2 className="heading">Robots there’s more to them than meets the eye.</h2>
    <SectionLink targetSectionId="section-demo" />
  </div>
);
export default Hero;
