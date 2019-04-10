import React from 'react';
import { BusinessCard } from './BusinessCard';
import PropTypes from 'prop-types';

const mainServices = [
    'Main service one',
    'Main service two',
    'Main service three',
    'Main service four',
    'Main service five',
    'Main service six'
];

export const BusinessCardContainer = ({ business }) => (
    <BusinessCard 
        id={business.id}
        profileImage={business.profileImage}
        name={business.name}
        phone={business.telephoneNumber}
        email={business.email}
        url={business.website}
        isLongTermCustomer={business.isLongTermCustomer}
        categories={business.services}
        address={`${business.location.streetAddress} ${business.location.city} ${business.location.postcode}`}
        mainServices={mainServices}
        quote={business.reviews.length ? business.reviews[0].body[0] : null}
        starRating={business.averageRating === null ? 0 : business.averageRating}
        numberOfRatings={business.numberOfReviews}
        businessObject={business}
    />
);

BusinessCardContainer.propTypes = {
    business: PropTypes.object
};
