import React from 'react';
import PropTypes from 'prop-types';
import ImageColumn from './ImageColumn';
import InfoColumn from './InfoColumn';
import RatingsColumn from './RatingsColumn';
import { StyledBusinessCardContainer } from './BusinessCardElements';

export const BusinessCard = (props) => (
    <StyledBusinessCardContainer>
        <ImageColumn 
            profileImage={props.profileImage}
        />
        <InfoColumn 
            name={props.name}
            categories={props.categories}
            phone={props.phone}
            email={props.email}
            url={props.url}
            address={props.address}
            bulletPoints={props.bulletPoints}
            quote={props.quote}
            isLongTermCustomer={props.isLongTermCustomer}
        />
        <RatingsColumn 
            starRating={props.starRating}
            numberOfRatings={props.numberOfRatings}
            id={props.id}
            businessObject={props.businessObject}
        />
    </StyledBusinessCardContainer>
);

BusinessCard.propTypes = {
    profileImage: PropTypes.string,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string,
    url: PropTypes.string,
    email: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.string.isRequired,
    bulletPoints: PropTypes.arrayOf(PropTypes.string),
    quote: PropTypes.string,
    starRating: PropTypes.number,
    numberOfRatings: PropTypes.number.isRequired,
    isLongTermCustomer: PropTypes.bool.isRequired
};