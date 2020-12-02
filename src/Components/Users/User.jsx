import React from 'react';
import PropTypes from 'prop-types';

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
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }.isRequired).isRequired,
};
