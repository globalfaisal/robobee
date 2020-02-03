import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './input-box.css';
import clsx from 'clsx';

const InputBox = ({ value = '', onChange, onSubmit }) => (
  <form noValidate onSubmit={onSubmit} className="form">
    <div className="form-controller">
      <input
        type="text"
        name="searchInput"
        id="searchInput"
        className="input"
        value={value}
        onChange={onChange}
        placeholder="Try on your name, or any text "
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default InputBox;
