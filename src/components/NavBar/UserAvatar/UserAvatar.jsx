import { useEffect, useRef, useState } from 'react';
import UserAvatarPopover from '../UserAvatarPopover/UserAvatarPopover';
import s from './UserAvatar.module.css';

const UserAvatar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className={s.wrapper} ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className={s.avatar}
      >
        {children}
      </button>
      <UserAvatarPopover isOpen={isOpen} />
    </div>
  );
};

export default UserAvatar;
