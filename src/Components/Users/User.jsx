/* eslint-disable react/require-default-props */
import React from 'react';
import { userShape } from './userShape';

import './userCard.scss';

export const User = ({ user }) => {
  const {
    name,
    email,
    phone,
    position,
    photo,
  } = user;

  return (
    <div className="users__card user-card" title={`${email}`}>
      <img
        className="user-card__photo"
        src={photo}
        alt="user"
      />
      <h3 className="user-card__name">
        {name}
      </h3>
      <div className="user-card__profile">
        <span className="user-card__position">
          {position}
        </span>
        <span className="user-card__email">
          {email}
        </span>
        <span className="user-card__phone">
          {phone}
        </span>
      </div>
    </div>
  );
};

User.propTypes = {
  user: userShape,
};
