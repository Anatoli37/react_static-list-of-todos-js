import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo, user }) => {
  return (
    <div className={`TodoInfo${todo.completed ? ' TodoInfo--completed' : ''}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={user} />
    </div>
  );
};
