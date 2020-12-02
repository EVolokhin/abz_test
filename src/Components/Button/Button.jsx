import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ text, name, type, action, className }) => (
  <button
    onClick={action}
    name={name}
    // eslint-disable-next-line react/button-has-type
    type={type}
    className={className}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
