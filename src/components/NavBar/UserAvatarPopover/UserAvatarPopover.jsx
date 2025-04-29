import { Link } from 'react-router-dom';
import s from './UserAvatarPopover.module.css';
import clsx from 'clsx';

const UserAvatarPopover = ({ isOpen }) => {
  return (
    <ul className={clsx(s.wrapper, isOpen && s.anim)}>
      <li>
        <button type="button" className={s.button}>
          Settings
        </button>
      </li>
      <li>
        <button type="button" className={s.button}>
          Logout
        </button>
      </li>
    </ul>
  );
};

export default UserAvatarPopover;
