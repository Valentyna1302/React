import { Field, Form, Formik } from 'formik';

const Register = () => {
  const initialValues = {
    email: '',
    name: '',
    password: '',
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };
  return (
    <div className='formWrapper'>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className='form'>
          <label>
            <span>Name:</span>
            <Field name='name' />
          </label>
          <label>
            <span>Email:</span>
            <Field name='email' />
          </label>
          <label>
            <span>Password:</span>
            <Field name='password' type='password' />
          </label>
          <button type='submit'>Register</button>
        </Form>
      </Formik>
    </div>
  );
};
export default Register;
