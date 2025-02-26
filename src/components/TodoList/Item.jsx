import { useDispatch } from 'react-redux';
import s from './TodoList.module.css';
import { FaStar } from 'react-icons/fa';
import { deleteTodo, editTodo } from '../../redux/todosOps';

const Item = ({ completed, edit, text, id, isFavorite }) => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(editTodo({ completed: !completed, text, id }));
  };
  return (
    <li className={s.item}>
      <input type='checkbox' checked={completed} onChange={handleChange} />
      <p>
        {isFavorite && <FaStar color='gold' />} {text}{' '}
      </p>
      <div>
        <button>{isFavorite ? 'Dislike' : 'Like'}</button>
        <button onClick={edit}>Edit</button>
        <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
      </div>
    </li>
  );
};
export default Item;
