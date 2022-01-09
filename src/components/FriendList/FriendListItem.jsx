
import PropTypes from 'prop-types';
import { FriendItem, Status, Avatar } from './FrienfList.styled';


export default function FriendListItem({ isOnline, avatarUrl, name }) {
    return (
        <ul>
      <FriendItem>
                <Status status={isOnline}></Status>
      <Avatar src={avatarUrl} alt={name} width="48" />
            <p>{name}</p>
            </FriendItem>
            </ul>
    );
} 

FriendListItem.propTypes = {
      isOnline: PropTypes.bool.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
};