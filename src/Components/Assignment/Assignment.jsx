import React from 'react';
import { Button } from '../Button/Button';

import './assigment.scss';

export const Assignment = () => (
  <section className="assignment">
    <h1 className="assignment__header">
      test assignment for frontend developer position
    </h1>
    <p className="assignment__text">
      We kindly remind you that your test assignment should be submitted
      as a link to github/bitbucket repository.
      Please be patient, we consider
      and respond to every application that meets minimum requirements.
      We look forward to your submission. Good luck! The photo
      has to scale in the banner area on the different screens
    </p>
    <Button
      text="Sing up now"
      name="assignment"
      type="button"
      action={() => (document.location = '#signUp')}
      className="assignment__button"
    />
  </section>
);
