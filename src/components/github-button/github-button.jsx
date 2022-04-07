import React from 'react';

import GitHubButton from 'react-github-btn';

import './github-button.css';

const GithubButton = () => (
  <div className="github-button">
    <GitHubButton
      data-icon="octicon-follow"
      data-size="large"
      href="https://github.com/globalfaisal"
      aria-label="Follow globalfaisal/robobee on GitHub"
    >
      Follow
    </GitHubButton>

    <GitHubButton
      data-icon="octicon-star"
      data-size="large"
      href="https://github.com/fsl-mo/robobee"
      aria-label="Star globalfaisal/robobee on GitHub"
    >
      Star
    </GitHubButton>

    <GitHubButton
      data-icon="octicon-repo-forked"
      data-size="large"
      href="https://github.com/globalfaisal/robobee/fork"
      aria-label="Fork globalfaisal/robobee on GitHub"
    >
      Fork
    </GitHubButton>
  </div>
);

export default GithubButton;
