import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { FormInput } from './FormInput';
import { FormRadioInput } from './RadioInput';
import { inputsData } from './inputData';
import { Button } from '../Button/Button';
import { validate } from './validate';
import { postSignupForm } from '../api';

export const SignupForm = ({ setUsers }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      position: '',
      photo: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      postSignupForm(values, setUsers);
      formik.resetForm();
    },

  });

  return (
    <form>
      <FormInput
        key={inputsData.name.id}
        data={inputsData.name}
        value={formik.values.name}
        handleChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name
        ? <div>{formik.errors.name}</div>
        : null}

      <FormInput
        key={inputsData.email.id}
        data={inputsData.email}
        value={formik.values.email}
        handleChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email
        ? <div>{formik.errors.email}</div>
        : null}

      <FormInput
        key={inputsData.phone.id}
        data={inputsData.phone}
        value={formik.values.phone}
        handleChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.phone && formik.errors.phone
        ? <div>{formik.errors.phone}</div>
        : null}

      <FormRadioInput
        key={inputsData.position.id}
        value={formik.values.position}
        handleChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.position && formik.errors.position
        ? <div>{formik.errors.position}</div>
        : null}

      <FormInput
        key={inputsData.photo.id}
        data={inputsData.photo}
        value={formik.values.photo}
        handleChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.photo && formik.errors.photo
        ? <div>{formik.errors.photo}</div>
        : null}

      <Button
        text="Sign up now"
        name="form button"
        type="submit"
        action={formik.handleSubmit}
        className="signup-form__button"
      />
    </form>
  );
};

SignupForm.propTypes = {
  setUsers: PropTypes.func.isRequired,
};
