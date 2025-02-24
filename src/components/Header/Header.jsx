import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/selectors';
import { logoutThunk } from '../../redux/authOperations';
const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <header>
      <h2>Auth</h2>
      {user.name && <h3>{user.email}</h3>}
      <nav className={s.nav}>
        <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/'>
          Home
        </NavLink>
        <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/todos'>
          Todos
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/register'>
              Register
            </NavLink>
            <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/login'>
              Login
            </NavLink>
          </>
        )}
        {isLoggedIn && <button onClick={() => dispatch(logoutThunk())}>Logout</button>}
      </nav>
    </header>
  );
};
export default Header;
