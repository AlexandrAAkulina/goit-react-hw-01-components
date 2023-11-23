export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className="item">
      <span className="status" />
      <img className="avatar" src={avatar} alt="User avatar" width={48} />
      <p className="name">{name}</p>
    </li>
  );
};