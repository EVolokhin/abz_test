import React from 'react';
import { inputTypes } from './inputPropTypes';

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

FormInput.propTypes = inputTypes;
