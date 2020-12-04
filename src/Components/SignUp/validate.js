/* eslint-disable no-control-regex */
// eslint-disable-next-line max-len
const emailPattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;

export const validate = (values) => {
  const errors = {};

  const filePhoto = document.querySelector('input[type="file"]');
  const photoSize = (values.photo) ? filePhoto.files[0].size : 0;

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 2 || values.name.length > 60) {
    errors.name = 'Username should contain 2-60 characters';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (values.email.length < 2 || values.email.length > 100) {
    errors.email = 'Username should be valid and contain 2-100 characters';
  } else if (!emailPattern.test(values.email)) {
    errors.email = 'Invalid email';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else if (!/^[+]{0,1}380([0-9]{9})$/i.test(values.phone)) {
    errors.phone = 'Invalid number';
  }

  if (!values.position) {
    errors.position = 'Required';
  }

  if (!values.photo) {
    errors.photo = 'Required';
  }

  if (values.photo
      && !values.photo.toLowerCase().includes('jpg')
      && !values.photo.toLowerCase().includes('jpeg')) {
    errors.photo = 'The photo format must be jpeg/jpg type';
  }

  if (photoSize / 1024 > 5120) {
    errors.photo = 'The photo size must not be greater than 5 Mb';
  }

  // didn`t add photo heigth & width validaton
  // the reason is - lack of knowledge

  return errors;
};
