/* eslint-disable no-console */
import React from 'react';
import { Button } from '../Button/Button';

import acquaintmentImg from '../../Assets/man-laptop-v1.svg';
import './acquaintment.scss';

export const Acquaintment = () => (
  <section className="acquaintment">
    <h2 className="acquaintment__header">Let&apos;s get acquainted</h2>
    <img
      className="acquaintment__img"
      src={acquaintmentImg}
      alt="men with laptop"
    />
    <div className="acquaintment__container">
      <h3 className="acquaintment__text-1">I am cool frontend developer</h3>
      <p className="acquaintment__text-2">
        We will evaluate how clean your approach to
        writing CSS and Javascript code is.
        You can use any CSS and Javascript
        3rd party libraries without any restriction.
      </p>
      <p className="acquaintment__text-3">
        If 3rd party css/javascript libraries are added to the project via
        bower/npm/yarn you will get bonus points. If you use any task runner
        (gulp/webpack) you will get bonus points as well.
        Slice service directory page PSD mockup into HTML5/CSS3.
      </p>
      <Button
        text="Sing up now"
        name="accquaintment"
        type="button"
        action={() => (document.location = '#signUp')}
        className="acquaintment__button"
      />
    </div>
  </section>
);
