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
    <label>How did you hear of us?</label>
    <div name="heardOfUs">
      <div>
        <label>
          <Field
            type="radio"
            value="friend"
            checked={values.heardOfUs === 'friend'}
          />
          friend
        </label>
      </div>
      <div>
        <label>
          <Field
            type="radio"
            value="website"
            checked={values.heardOfUs === 'website'}
          />
          website
        </label>
      </div>
      <div>
        <label>
          <Field
            type="radio"
            value="meetup.com"
            checked={values.heardOfUs === 'meetup.com'}
          />
          meetup.com
        </label>
      </div>
      <div>
        <label>
          <Field
            type="radio"
            value="other"
            checked={values.heardOfUs === 'other'}
          />
          other
        </label>
        <ErrorMessage name="heardOfUs" component="p" />
      </div>
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
          <Field type="radio" value="yes" checked={values.firstTime === true} />
          yes
        </label>
      </div>
      <div>
        <label>
          <Field type="radio" value="no" checked={values.firstTime === false} />
          no
        </label>
      </div>
    </div>
    <br />
    <label>Amount you paid:</label>
    <div>
      $ <Field type="number" name="amountPaid" id="amount-paid" />
      <ErrorMessage name="amountPaid" component="p" />
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
  mapPropsToValues({ name, email, heardOfUs, firstTime, amountPaid }) {
    return {
      name: name || '',
      email: email || '',
      heardOfUs: heardOfUs || 'friend',
      firstTime: firstTime || true,
      amountPaid: amountPaid || ''
    };
  },
  validationSchema: yup.object().shape({
    name: yup.string().required('name is required'),
    email: yup
      .string()
      .email('email not valid')
      .required('email is required'),
    heardOfUs: yup.string().required('we would like to know :)'),
    amountPaid: yup
      .number('must be a number')
      .required('how much did you pay?')
      .positive()
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
