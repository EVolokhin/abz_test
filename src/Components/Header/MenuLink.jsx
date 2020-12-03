/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

export const MenuLink = ({ name, className, toggleOpen }) => (
  <li className={className}>
    <a href="#signUp" onClick={toggleOpen}>
      {` ${name} `}
    </a>
  </li>
);

MenuLink.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  toggleOpen: PropTypes.func,
};
