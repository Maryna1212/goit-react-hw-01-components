import PropTypes from 'prop-types';
import defaultImage from './default.jpeg';
import { Prof, Description, Avatar, Name, Tag, Stats, StatsItem, Label } from './Profile.styled';

export default function Profile(props) {
    const { url = defaultImage, username, tag, location, statsFollowers, statsViews, statsLikes} = props;
    return (
        <Prof>
           <Description> 
                <Avatar
                    src={url ?? defaultImage}
                    alt={username}
                    width="200"
                />
                <Name>{username}</Name>
                <Tag>{tag}</Tag>
                <p>{location}</p>
           </Description>
       

            <Stats>
                <StatsItem>
                    <Label>Followers</Label>
                    <span>{statsFollowers}</span>
                </StatsItem>
                <StatsItem>
                    <Label>Views</Label>
                    <span>{statsViews}</span>
                </StatsItem>
                <StatsItem>
                    <Label>Likes</Label>
                    <span>{statsLikes}</span>
                </StatsItem>
            </Stats>
        </Prof>
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
