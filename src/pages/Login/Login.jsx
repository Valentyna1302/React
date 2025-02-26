import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/authOperations';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(loginThunk(values))
      .unwrap()
      .then(res => {
        toast.success(`Welcome, ${res.user.email}`);
        navigate('/todos', { replace: true });
      })
      .catch(() => toast.error('Invalid data'));

    options.resetForm();
  };
  return (
    <div className='formWrapper'>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className='form'>
          <label>
            <span>Email:</span>
            <Field name='email' />
          </label>
          <label>
            <span>Password:</span>
            <Field name='password' type='password' />
          </label>
          <button type='submit'>Login</button>

          <p style={{ color: 'black' }}>
            You do not have account yet? <Link to='/register'>Get IT!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default Login;
