import PropTypes from 'prop-types';
import defaultImage from './default.jpeg';

export default function Profile(props) {
    const { url = defaultImage, username, tag, location, statsFollowers, statsViews, statsLikes} = props;
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={url}
                    alt={username}
                    className="avatar"
                    width="200"
                />
                <p className="name">{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity">{statsFollowers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">{statsViews}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{statsLikes}</span>
                </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    url: PropTypes.string,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    statsFollowers: PropTypes.number.isRequired,
    statsViews: PropTypes.number.isRequired,
    statsLikes: PropTypes.number.isRequired,
};
