import React from 'react';
import PropTypes from 'prop-types';
import { MenuLink } from '../Header/MenuLink';
import { linkNamesMenu1, linkNamesMenu2, linkNamesMenu3 } from '../linkNames';
import logo from '../../Assets/logo.svg';

import '../Header/header.scss';

export const Menu = ({ isHide }) => (
  <section hidden={isHide}>
    <div>
      <img
        src={logo}
        alt="site-logo"
        className="header__img"
      />
    </div>

    <ul>
      {linkNamesMenu1.map(name => (
        <MenuLink key={name} name={name} />
      ))}
    </ul>

    <ul>
      {linkNamesMenu2.map((name, i) => (
        <MenuLink key={name} name={name} />
      ))}
    </ul>

    <ul>
      {linkNamesMenu3.map((name, i) => (
        <MenuLink key={name} name={name} />
      ))}
    </ul>
  </section>
);

Menu.propTypes = {
  isHide: PropTypes.bool.isRequired,
};
