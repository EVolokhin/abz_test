import React from 'react';
import PropTypes from 'prop-types';

export const FormInput = ({ data, value, handleChange, onBlur }) => {
  const { id, name, type, placeholder } = data;

  return (
    <div className="signup-form__container">
      <label htmlFor={id} className="signup-form__name">
        {name}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        className="signup-form__input"
      />
    </div>
  );
};

FormInput.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
