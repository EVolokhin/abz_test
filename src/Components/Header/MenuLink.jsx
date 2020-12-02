import React from 'react';
import PropTypes from 'prop-types';

export const MenuLink = ({ name }) => (
  <li className="header__link">
    <a href="#signUp">
      {` ${name} `}
    </a>
  </li>
);

MenuLink.propTypes = {
  name: PropTypes.string.isRequired,
};
