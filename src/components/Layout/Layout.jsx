import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import WelcomeMessage from '../NavBar/WelcomeMessage/WelcomeMessage';
import SearchField from '../NavBar/SearchField/SearchField';
import UserAvatar from '../NavBar/UserAvatar/UserAvatar';
import user from '../../data/user.json';

const Layout = () => {
  let userName = '';
  user.name.split(' ').forEach(item => (userName += item[0]));

  return (
    <>
      <NavBar>
        <WelcomeMessage />
        <SearchField placeholder="Search" />
        <UserAvatar>{userName}</UserAvatar>
      </NavBar>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
