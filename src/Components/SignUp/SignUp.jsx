import React from 'react';
import PropTypes from 'prop-types';
import { SignupForm } from './SignUpForm';

import './signUp.scss';

export const SignUp = ({ setUsers }) => (
  <section className="signup" id="signUp">
    <h2 className="signup__header">Register to get a work</h2>
    <span className="signup__text">
      Attention! After successful registration and alert,
      update the list of users in the block from the top
    </span>
    <SignupForm setUsers={setUsers} />
  </section>
);

SignUp.propTypes = {
  setUsers: PropTypes.func.isRequired,
};
