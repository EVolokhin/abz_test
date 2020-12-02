import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export const UsersList = ({ users }) => {
  const preparedUsers = users
    .sort((a, b) => b.registration_timestamp - a.registration_timestamp);

  return (
    <div className="users__container">
      {preparedUsers.map(user => <User key={user.id} user={user} />)}
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
