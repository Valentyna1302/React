import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
const Header = () => {
  return (
    <header>
      <h2>Auth</h2>
      <nav className={s.nav}>
        <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/'>
          Home
        </NavLink>
        <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/todos'>
          Todos
        </NavLink>
        <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/register'>
          Register
        </NavLink>
        <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/login'>
          Login
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
