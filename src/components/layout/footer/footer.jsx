import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.css';
import GithubButton from '../../github-button/github-button';

const Footer = () => (
  <footer>
    <small>
      Made with <FontAwesomeIcon icon="heart" /> in Stockholm, Sweden.
    </small>

    <small>
      Developed by{' '}
      <a
        href="https://github.com/fsl-mo"
        target="_blank"
        rel="noopener noreferrer"
        className="author-link text-link "
      >
        Faisal Mohamoud
      </a>
    </small>
    <GithubButton />
  </footer>
);

export default Footer;
