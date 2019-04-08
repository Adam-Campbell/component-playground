import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../StarRating';
import {
    RatingsColContainer, 
    ReviewLink,
    AdditionalLinksContainer,
    ShortlistLink,
    RatingsColButtonLink
} from './RatingsColumnElements';

const RatingsColumn = ({ starRating, id, numberOfRatings }) => (
    <RatingsColContainer>
        <StarRating 
            rating={starRating}
            starGroupName={id}
            numOfRatings={numberOfRatings}
        />
        <ReviewLink to="/">
            Write a review
        </ReviewLink>
        <AdditionalLinksContainer>
            <ShortlistLink to="/">
                Shortlist
            </ShortlistLink>
            <RatingsColButtonLink to="/">
                More info
            </RatingsColButtonLink>
        </AdditionalLinksContainer>
    </RatingsColContainer>
);

RatingsColumn.propTypes = {
    starRating: PropTypes.number,
    id: PropTypes.string,
    numberOfRatings: PropTypes.number
};

export default RatingsColumn;