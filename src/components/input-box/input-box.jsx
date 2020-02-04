import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './input-box.css';

const InputBox = ({
  onChange,
  onSubmit,
  value = '',
  type,
  placeholder,
  loading = false,
}) => (
  <form
    noValidate
    onSubmit={onSubmit}
    className={clsx('form', loading && 'loading')}
    disabled={loading}
  >
    <div className="form-controller">
      <input
        type={type || 'text'}
        name="searchInput"
        id="searchInput"
        className="input"
        value={value}
        onChange={onChange}
        placeholder={placeholder || ''}
      />
      <button
        type="submit"
        disabled={value.trim() === ''}
        className="btn-submit"
      >
        <FontAwesomeIcon
          icon="long-arrow-alt-right"
          className={clsx('input-icon', value.trim() !== '' && 'animate')}
        />
      </button>
    </div>
  </form>
);

InputBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'search']),
  placeholder: PropTypes.string,
  loading: PropTypes.bool,
};

export default InputBox;
