import React from 'react';
import PropTypes from 'prop-types';
import { MenuLink } from './MenuLink';
import { Burger } from '../Burger/Burger';
import { linkNamesHeader } from '../linkNames';
import logo from '../../Assets/logo.svg';

import './header.scss';

export const Header = ({ toggleOpen }) => (
  <header className="header">
    <img
      src={logo}
      alt="site-logo"
      className="header__img"
    />
    <ul className="header__list">
      {linkNamesHeader.map(name => (
        <MenuLink key={name} name={name} />
      ))}
    </ul>

    <Burger toggleOpen={toggleOpen} />
  </header>
);

Header.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
};
