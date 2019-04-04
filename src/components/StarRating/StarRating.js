import React from 'react';
import Star from './Star';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.p`
    font-family: 'Lato';
    font-weight: ${props => props.bold ? 700 : 300};
    color: #222;
    font-size: 0.85rem;
    margin-top: 0;
    margin-bottom: 0;
`;

const Em = styled.span`
    font-weight: 700;
    font-size: 1.1rem;
`;

const formatRating = (rating) => rating % 1 === 0 ? `${rating}.0` : rating;

const RatingsText = ({ rating, numOfRatings }) => (
    <Text><Em>{formatRating(rating)}</Em>{` (${numOfRatings} ${numOfRatings === 1 ? 'rating' : 'ratings'})`}</Text>
);

const NoRatingsText = () => (
    <Text bold>No Ratings</Text>
);

export const StarRating = ({ rating, starGroupName, numOfRatings }) => (
    <div>
        <div>
            {new Array(5).fill(0).map((el, index) => (
                <Star 
                    value={Math.max(rating-index, 0)}
                    idName={`${starGroupName}-${index}`} 
                    key={`${starGroupName}-${index}`} 
                />
            ))}
        </div>
        {numOfRatings > 0 ? 
            <RatingsText 
                rating={rating}
                numOfRatings={numOfRatings}
            /> : 
            <NoRatingsText />
        }
    </div>
);

StarRating.propTypes = {
    rating: PropTypes.number,
    starGroupName: PropTypes.string.isRequired,
    numOfRatings: PropTypes.number.isRequired
};

StarRating.defaultProps = {
    rating: 0
};