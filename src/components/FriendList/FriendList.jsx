
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendListContainer } from './FrienfList.styled';

function FriendList({ friends }) {
    return (
        <FriendListContainer>
            {friends.map((friend) => (
                <li key={friend.id}>
                    <FriendListItem
                        avatarUrl={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                />
            </li>))}
</FriendListContainer>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
};

export default FriendList;