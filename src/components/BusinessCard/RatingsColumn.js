import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarRating from '../StarRating';

const RatingsColContainer = styled.div`
    width: 20%;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
`;

const ReviewLink = styled.a`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 1rem;
    color: #0083c3;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const AdditionalLinksContainer = styled.div`
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ShortlistLink = styled.a`
    font-family: 'Lato';
    font-weight: 300;
    font-size: 0.85rem;
    color: #0083c3;
    text-decoration: none;
    margin-bottom: 5px;
    &:hover {
        text-decoration: underline;
    }
`;

const ButtonLink = styled.a`
    background: #fedb00;
    transition: background ease-out 0.2s;
    border: none;
    border-radius: 3px;
    text-decoration: none;
    font-family: 'Lato';
    font-weight: 400;
    color: #222;
    padding: 10px 10px;
    width: 100%;
    text-align: center;
    &:hover {
        background: #cab010;
    }
`;

const RatingsColumn = ({ starRating, id, numberOfRatings }) => (
    <RatingsColContainer>
        <StarRating 
            rating={starRating}
            starGroupName={id}
            numOfRatings={numberOfRatings}
        />
        <ReviewLink href="#">
            Write a review
        </ReviewLink>
        <AdditionalLinksContainer>
            <ShortlistLink href="#">
                Shortlist
            </ShortlistLink>
            <ButtonLink href="#">
                More info
            </ButtonLink>
        </AdditionalLinksContainer>
    </RatingsColContainer>
);

export default RatingsColumn;