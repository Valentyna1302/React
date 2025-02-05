import { Field, Form, Formik } from 'formik';

const SearchBar = () => {
  const onSubmit = values => {
    console.log(values);
  };

  const initialValues = {
    query: '',
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field name='query' />
          <button type='submit'>Search</button>
        </Form>
      </Formik>
    </div>
  );
};
export default SearchBar;
