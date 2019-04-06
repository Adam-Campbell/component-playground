import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageColumn from './ImageColumn';
import InfoColumn from './InfoColumn';
import RatingsColumn from './RatingsColumn';

const BusinessCardContainer = styled.article`
    width: 100%;
    min-height: 150px;
    margin: 0 auto;
    padding: 20px 10px;
    cursor: pointer;
    border: solid 1px #aaa;
    border-radius: 4px;
    display: flex;
    align-items: stretch;
    &:hover {
        box-shadow: 0px 0px 5px #ccc;
    }
    & + & {
        margin-top: 30px;
    }
`;

export const BusinessCard = (props) => (
    <BusinessCardContainer>
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
            mainServices={props.mainServices}
            quote={props.quote}
            isLongTermCustomer={props.isLongTermCustomer}
        />
        <RatingsColumn 
            starRating={props.starRating}
            numberOfRatings={props.numberOfRatings}
            id={props.id}
        />
    </BusinessCardContainer>
);

BusinessCard.propTypes = {
    profileImage: PropTypes.string,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string,
    url: PropTypes.string,
    email: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.string.isRequired,
    mainServices: PropTypes.arrayOf(PropTypes.string),
    quote: PropTypes.string,
    starRating: PropTypes.number,
    numberOfRatings: PropTypes.number.isRequired,
    isLongTermCustomer: PropTypes.bool.isRequired
};