import React from 'react';
import { BusinessCard } from './BusinessCard';
import data from '../../data';
import PropTypes from 'prop-types';
import SartiProfileImage from '../../images/sarti-profile.webp';

const mainServices = [
    'Main service one',
    'Main service two',
    'Main service three',
    'Main service four',
    'Main service five',
    'Main service six'
];

export const BusinessCardContainer = ({ business }) => {
    //const businessData = data[businessId];
    return <BusinessCard 
        id={business.id}
        profileImage={SartiProfileImage}
        name={business.name}
        phone={business.telephoneNumber}
        email={business.email}
        url={business.website}
        isLongTermCustomer={false}
        categories={business.services}
        address={`${business.location.streetAddress} ${business.location.city} ${business.location.postcode}`}
        mainServices={mainServices}
        quote={business.reviews.length ? business.reviews[0].body[0] : null}
        starRating={business.averageRating === null ? 0 : business.averageRating}
        numberOfRatings={business.numberOfReviews}
    />
}

BusinessCardContainer.propTypes = {
    //businessId: PropTypes.string.isRequired
    business: PropTypes.object
};
