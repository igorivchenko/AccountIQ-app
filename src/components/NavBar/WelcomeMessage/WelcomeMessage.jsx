import user from '../../../data/user.json';
import tasks from '../../../data/tasks.json';
import s from './WelcomeMessage.module.css';

const WelcomeMessage = () => {
  const userName = user.name.split(' ')[0];

  return (
    <span
      className={s.message}
    >{`Hi ${userName}, welcome! You have ${tasks.length} open tasks.`}</span>
  );
};

export default WelcomeMessage;
