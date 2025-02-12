import s from './TodoList.module.css';
import { FaStar } from 'react-icons/fa';

const Item = ({ isCompleted, todo, id, isFavorite }) => {
  return (
    <li className={s.item}>
      <input type='checkbox' checked={isCompleted} />
      <p>
        {isFavorite && <FaStar color='gold' />} {todo}
      </p>
      <div>
        <button>{isFavorite ? 'Dislike' : 'Like'}</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </li>
  );
};
export default Item;
