import clsx from 'clsx';
import s from './NavBar.module.css';

const NavBar = ({ children }) => {
  return (
    <header className={s.header}>
      <div className={clsx('container', s['header-container'])}>{children}</div>
    </header>
  );
};

export default NavBar;
