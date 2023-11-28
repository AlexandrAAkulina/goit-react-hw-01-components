import { FriendListItem } from './FriendListItem';
import css from './Friends.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                isOnline={isOnline} />
            ))}
</ul>
    )
}