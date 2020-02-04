import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './search-box.css';

const SearchBox = ({
  onSearchChange,
  onSearchSubmit,
  value = '',
  type,
  placeholder,
  loading = false,
}) => (
  <form
    noValidate
    onSubmit={onSearchSubmit}
    className={clsx('search-box form', loading && 'loading')}
    disabled={loading}
  >
    <div className="search-box-control">
      <input
        type={type || 'text'}
        name="searchInput"
        id="searchInput"
        className="search-input"
        value={value}
        onChange={onSearchChange}
        placeholder={placeholder || ''}
      />
      <button
        type="submit"
        disabled={value.trim() === ''}
        className="search-submit-btn"
      >
        <FontAwesomeIcon
          icon="long-arrow-alt-right"
          className="search-submit-icon"
        />
      </button>
    </div>
  </form>
);

SearchBox.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'search']),
  placeholder: PropTypes.string,
  loading: PropTypes.bool,
};

export default SearchBox;
