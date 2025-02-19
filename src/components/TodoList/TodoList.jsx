import { useDispatch } from 'react-redux';
import { List } from './List';
import { SearchBar } from './SearchBar';
import s from './TodoList.module.css';
import { useEffect, useState } from 'react';
import { addTodo, fetchData } from '../../redux/todosOps';
import TodoForm from '../TodoForm';
import Modal from '../Modal/Modal';
import Filter from './Filter';
export const TodoList = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (values, options) => {
    dispatch(addTodo(values));
    setIsOpen(false);
    options.resetForm();
  };
  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchData({ signal: abortController.signal }));
    return () => {
      abortController.abort();
    };
  }, [dispatch]);

  return (
    <div className={s.todoWrapper}>
      {/* <AddForm /> */}
      <button onClick={() => setIsOpen(true)}>Add</button>
      <SearchBar />

      <Filter />
      <List />
      {isOpen && (
        <Modal>
          <TodoForm handleSubmit={handleSubmit} initialValues={{ todo: '' }} />
        </Modal>
      )}
    </div>
  );
};
