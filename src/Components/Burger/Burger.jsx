import React from 'react';
import PropTypes from 'prop-types';
import icon from '../../Assets/menu icon.svg';

export const Burger = ({ toggleOpen }) => (
  <button
    className="header__burger"
    type="button"
    onClick={toggleOpen}
  >
    <img src={icon} alt="burgerimage" />
  </button>
);

Burger.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
};
