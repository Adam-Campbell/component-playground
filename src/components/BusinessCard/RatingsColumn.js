import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../StarRating';
import {
    RatingsColContainer, 
    ReviewLink,
    AdditionalLinksContainer,
    RatingsColButtonLink
} from './RatingsColumnElements';
import ShortlistButton from './ShortlistButton';

const RatingsColumn = ({ starRating, id, numberOfRatings, businessObject }) => (
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
            <ShortlistButton businessId={id} businessObject={businessObject} />
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
