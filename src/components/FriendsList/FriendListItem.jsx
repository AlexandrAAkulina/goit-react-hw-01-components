import css from './Friends.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.statusOnline : css.statusOffline} />
      <img className={css.avatar} src={avatar} alt="User avatar" width={48} />
      <p className={css.name}>{name}</p>
    </li>
  );
};
