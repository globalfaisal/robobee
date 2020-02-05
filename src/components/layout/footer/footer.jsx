import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.css';
import GithubButton from '../../github-button/github-button';

const Footer = () => (
  <footer>
    <small>
      Made with <FontAwesomeIcon icon="heart" /> in Sweden.
    </small>

    <GithubButton />
  </footer>
);

export default Footer;
