import PropTypes from 'prop-types';
import { FriendItem, Avatar } from './FrienfList.styled';

export default function FriendListItem({ id, isOnline, avatarUrl, name }) {
    return (
        <ul>
      <FriendItem key={id}>
      <span>{isOnline}</span>
      <Avatar src={avatarUrl} alt={name} width="48" />
            <p>{name}</p>
            </FriendItem>
            </ul>
    );
}

FriendListItem.propTypes = {
    id: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};