import React from 'react';
import { BusinessCard } from './BusinessCard';
import data from '../../data';
import PropTypes from 'prop-types';

export const BusinessCardContainer = ({ businessId }) => {
    const businessData = data[businessId];
    return <BusinessCard 
        profileImage={businessData.profileImage}
        name={businessData.name}
        phone={businessData.phone}
        email={businessData.email}
        url={businessData.url}
        isLongTermCustomer={businessData.isLongTermCustomer}
        categories={businessData.categories}
        address={businessData.address}
        mainServices={businessData.mainServices}
        quote={businessData.reviews.length ? businessData.reviews[0].body : null}
        starRating={businessData.starRating}
        numberOfRatings={businessData.numberOfRatings}
    />
}

BusinessCardContainer.propTypes = {
    businessId: PropTypes.string.isRequired
};
