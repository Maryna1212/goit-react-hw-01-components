import PropTypes from 'prop-types';
import { StatisticsSection, Title, StatList, Item, Label, Percentage } from './Statistics.styled';

function Statistics({ title, stats }) {
    return (
        <StatisticsSection>
            {title && <Title>{title}</Title>}

            <StatList>
                {stats.map(stat =>
                <Item key={stat.id}>
                    <Label>{stat.label}</Label>
                    <Percentage>{stat.percentage}%</Percentage>
                </Item>
                )}
            </StatList>
        </StatisticsSection>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
};

export default Statistics;