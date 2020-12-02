import React from 'react';
import PropTypes from 'prop-types';

export const MenuLink = ({ name, className }) => (
  <li className={className}>
    <a href="#signUp">
      {` ${name} `}
    </a>
  </li>
);

MenuLink.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
