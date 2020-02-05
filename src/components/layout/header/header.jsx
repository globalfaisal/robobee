import React from 'react';

import Logo from '../../logo/logo';

import './header.css';

const Header = ({ children }) => (
  <header>
    <nav>
      <Logo animate />
    </nav>
    {children}
  </header>
);

export default Header;
