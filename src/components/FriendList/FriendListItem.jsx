import PropTypes from 'prop-types';

export default function FriendListItem({ id, isOnline, avatarUrl, name }) {
    return (
        <ul>
      <li className="item" key={id}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatarUrl} alt={name} width="48" />
            <p className="name">{name}</p>
            </li>
            </ul>
    );
}

FriendListItem.propTypes = {
    // id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};