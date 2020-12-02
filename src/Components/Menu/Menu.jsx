import React from 'react';
import PropTypes from 'prop-types';
import { MenuLink } from '../Header/MenuLink';
import { linkNamesMenu1, linkNamesMenu2, linkNamesMenu3 } from '../linkNames';
// import logo from '../../Assets/logo.svg';

import './menu.scss';

export const Menu = ({ isHide }) => (
  <section
    hidden={isHide}
    className="nav-menu"
  >

    {/* <img
      src={logo}
      alt="site-logo"
      className="nav-men"
    /> */}

    <ul className="nav-menu__list">
      {linkNamesMenu1.map(name => (
        <MenuLink
          key={name}
          name={name}
          className="nav-menu__link"
        />
      ))}
    </ul>

    <ul className="nav-menu__list">
      {linkNamesMenu2.map((name, i) => (
        <MenuLink
          key={name}
          name={name}
          className="nav-menu__link"
        />
      ))}
    </ul>

    <ul className="nav-menu__list">
      {linkNamesMenu3.map((name, i) => (
        <MenuLink
          key={name}
          name={name}
          className="nav-menu__link"
        />
      ))}
    </ul>
  </section>
);

Menu.propTypes = {
  isHide: PropTypes.bool.isRequired,
};
