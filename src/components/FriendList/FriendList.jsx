import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
    return (
        <ul className="friend-list">
            {friends.map(friend =>
                <li key={friend.id}>
                    <FriendListItem
                        avatarUrl={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                />
            </li>)}
</ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};

export default FriendList;