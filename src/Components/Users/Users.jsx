import React from 'react';
import PropTypes from 'prop-types';
import { UsersList } from './UsersList';
import { Button } from '../Button/Button';
import { userShape } from './userShape';

import './users.scss';

export const Users = ({ users, usersPage, totalPages, handlePage }) => (
  <section className="users">
    <h2 className="users__header">Our cheerful users</h2>
    <span className="users__text">
      Attention! Sorting users by registration date
    </span>

    <UsersList users={users} />

    {usersPage < totalPages
  && (
    <Button
      text="Show more"
      name="users"
      type="button"
      action={handlePage}
      className="users__button"
    />
  )}
  </section>
);

Users.propTypes = {
  users: PropTypes.arrayOf(userShape).isRequired,
  usersPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePage: PropTypes.func.isRequired,
};
