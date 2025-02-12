import { Field, Form, Formik } from 'formik';
import s from './TodoList.module.css';
import { nanoid } from '@reduxjs/toolkit';

export const AddForm = () => {
  const initialValues = { todo: '' };
  const onSubmit = (values, options) => {
    const newTodo = {
      id: nanoid(),
      todo: values.todo,
      isCompleted: false,
      isFavorite: false,
    };
    options.resetForm();
  };

  return (
    <div className={s.addFormWrapper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field className={s.input} name='todo' placeholder='Enter new todo' />
          <button type='submit'>Add todo</button>
        </Form>
      </Formik>
    </div>
  );
};
