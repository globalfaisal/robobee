import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.css';
import GithubButton from '../../github-button/github-button';

const Footer = () => (
  <footer>
    <small className=" footer-text">
      Made with <FontAwesomeIcon icon="heart" /> by{' '}
      <a
        href="https://www.linkedin.com/in/faisal-mohamoud/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Faisal
      </a>
    </small>

    <GithubButton />
  </footer>
);

export default Footer;
