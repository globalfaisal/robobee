import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './section-link.css';

const SectionLink = ({ targetSectionId, className }) => {
  const scrollToSection = useCallback(() => {
    const element = document.getElementById(targetSectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  }, [targetSectionId]);

  return (
    <Link
      to={`#${targetSectionId}`}
      onClick={scrollToSection}
      className={clsx('section-link ', className)}
    >
      <FontAwesomeIcon
        icon="long-arrow-alt-down"
        className="section-link-icon"
      />
    </Link>
  );
};

SectionLink.propTypes = {
  className: PropTypes.string,
  targetSectionId: PropTypes.string.isRequired,
};

export default SectionLink;
