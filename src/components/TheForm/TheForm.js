import React from 'react';
import { withFormik, ErrorMessage, Form, Field } from 'formik';
import * as yup from 'yup';

const RawForm = ({ values, errors, touched, isSubmitting }) => (
  <Form>
    <label>Name:</label>
    <div>
      <Field type="text" name="name" id="name" />
      <ErrorMessage name="name" component="p" />
    </div>
    <br />
    <label>Email:</label>
    <div>
      <Field type="email" name="email" id="email" />
      <ErrorMessage name="email" component="p" />
    </div>
    <br />
    <div>
      <Field component="select" name="heardOfUs" id="heardOfUs">
        <option value="">How did you heard of us?</option>
        <option value="friend">friend</option>
        <option value="website">website</option>
        <option value="meetup.com">meetup.com</option>
        <option value="other">other</option>
      </Field>
      <ErrorMessage name="heardOfUs" component="p" />
    </div>
    <br />
    {values.heardOfUs === 'other' && (
      <div>
        <label>Tell us more about how you heard of us:</label>
        <br />
        <Field type="text" name="heardOfUsDetails" id="heardOfUsDetails" />
      </div>
    )}
    <br />
    <label>First time here?</label>
    <div name="first time">
      <div>
        <label>
          <Field
            type="radio"
            name="first-time"
            value="yes"
            checked={values.firstTime === true}
          />
          yes
        </label>
      </div>
      <div>
        <label>
          <Field
            type="radio"
            name="radio"
            value="no"
            checked={values.firstTime === false}
          />
          no
        </label>
      </div>
    </div>
    <br />
    <div>
      <button type="submit" id="submit" disabled={isSubmitting}>
        Submit
      </button>
    </div>
  </Form>
);

const TheForm = withFormik({
  mapPropsToValues({ name, email, heardOfUs, firstTime }) {
    return {
      name: name || '',
      email: email || '',
      heardOfUs: heardOfUs || '',
      firstTime: firstTime || true
    };
  },
  validationSchema: yup.object().shape({
    name: yup.string().required('name is required'),
    email: yup
      .string()
      .email('email not valid')
      .required('email is required'),
    heardOfUs: yup.string().required('we would like to know :)')
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
      setSubmitting(false);
    }, 400);
    console.log(values);
  }
})(RawForm);

export default TheForm;
