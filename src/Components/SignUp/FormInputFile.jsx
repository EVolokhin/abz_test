import React from 'react';
import PropTypes from 'prop-types';

import './formInputFile.scss';

export const FormInputFile = ({ data, value, handleChange, onBlur }) => {
  const { id, name, type, placeholder } = data;

  return (
    <div className="signup-form__file file">
      <span className="file__name">
        {name}
      </span>
      <div className="file__wrapper">
        <label htmlFor={id} className="file__input-button">
          <span className="file__input-text">
            {(value !== '') ? value : 'Upload your photo'}
          </span>
          <span className="file__input-wrapper">Browse</span>
        </label>
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          className="file__input"
        />
      </div>
    </div>
  );
};

FormInputFile.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
