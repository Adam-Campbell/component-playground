import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';

const InfoColContainer = styled.div`
    width: 65%;
    padding: 0 10px;
    border-right: solid 1px #aaa;
`;

const BusinessNameRow = styled.div`
    display: flex;
    margin-left: -10px;
    margin-right: -10px;
`;

const BusinessName = styled.h1`
    font-family: 'Montserrat';
    font-weight: 700;
    color: #222;
    text-decoration: none;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10px;
`;

const LinkWrapper = styled.a`
    text-decoration: none;
    color: #222;
    &:hover {
        text-decoration: underline;
    }
`;

const LoyaltyBanner = styled.div`
    background-color: #e74d3d;
    margin-left: auto;
    display: flex;
    align-items: center;
    width: 120px;
    padding-left: 10px;
    position: relative;
    height: 35px;
    &:after {
        content: ' ';
        display: block;
        position: absolute;
        left: -15px;
        top: 0;
        border-left: solid 15px transparent;
        border-bottom: solid 35px #e74d3d;
        border-right: 0;
    }
`;

const LoyaltyYears = styled.span`
    font-family: 'Lato';
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    margin-right: 10px;
`;

const LoyaltyText = styled.span`
    font-family: 'Lato';
    font-size: 0.75rem;
    font-weight: 400;
    color: #fff;
`;

const CategoryRow = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

const CategoryLabel = styled.p`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 0.85rem;
    margin-top: 5px;
    margin-bottom: 5px;
    color: #222;
    & + & {
        margin-left: 20px;
    }
`;

const LinkRow = styled.div`
    display: flex;
`;

const ButtonLink = styled.a`
    display: flex;
    align-items: center;
    background: #fedb00;
    transition: background ease-out 0.2s;
    border: none;
    border-radius: 3px;
    text-decoration: none;
    font-family: 'Lato';
    font-weight: 400;
    font-size: 0.85rem;
    color: #222;
    padding: 7px 12px;
    & + & {
        margin-left: 10px;
    }
    &:hover {
        background: #cab010;
    }
    .svg-inline--fa {
        margin-right: 5px;
        font-size: 1.1rem;
    }
`;

const AddressLink = styled.a`
    color: #0083c3;
    font-family: 'Lato';
    font-weight: 400;
    font-size: 0.85rem;
    text-decoration: none;
    margin-top: 10px;
    margin-bottom: 10px;
    display: inline-block;
    &:hover {
        text-decoration: underline;
    }
`;

const ServicesList = styled.ul`
    list-style-type: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-right: -10px;
`;

const ServiceListItem = styled.li`
    width: 50%;
    font-family: 'Lato';
    font-weight: 300;
    font-size: 0.85rem;
    color: #222;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 3px;
    margin-bottom: 3px;
`;

const ServiceBulletPoint = styled.span`
    color: #aaa;
    font-size: 0.7rem;
    margin-right: 5px;
`;

const QuoteRow = styled.div`
    font-family: 'Lato';
    font-weight: 300;
    font-size: 0.75rem;
    color: #555;
`;

const Quote = styled.q`
    font-style: italic;
`;

const QuoteLink = styled.a`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 0.75rem;
    color: #0083c3;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const truncateString = (str, max) => str.length <= max ? str : str.slice(0, max).concat('...');


const InfoColumn = ({ name, categories, email, url, phone, address, mainServices, quote, isLongTermCustomer }) => (
    <InfoColContainer>

        <BusinessNameRow>
            <LinkWrapper href="#">
                <BusinessName>{name}</BusinessName>
            </LinkWrapper>
            {isLongTermCustomer && (
                <LoyaltyBanner>
                    <LoyaltyYears>15+</LoyaltyYears>
                    <LoyaltyText>Years <br/> with Yell</LoyaltyText>
                </LoyaltyBanner>
            )}
        </BusinessNameRow>

        {categories.length && 
            <CategoryRow>
                {categories.map((category, index) => (
                    <CategoryLabel key={index}>
                        {category}
                    </CategoryLabel>
                ))}
            </CategoryRow>
        }

        <LinkRow>
            {email && <ButtonLink href={`email::${email}`}>
                <FontAwesomeIcon icon={faEnvelope} />
                Email
            </ButtonLink>}
            {url && <ButtonLink href={url}>
                <FontAwesomeIcon icon={faGlobe} />
                Website
            </ButtonLink>}
            {phone && <ButtonLink href={`call::${phone}`}>
                <FontAwesomeIcon icon={faPhone} />
                Call
            </ButtonLink>}
        </LinkRow>

        <div>
            <AddressLink href="#">
                {address}
            </AddressLink>
        </div>

        {mainServices.length > 0 && 
            <div>
                <ServicesList>
                    {mainServices.map((service, index) => (
                        <ServiceListItem key={index}>
                            <ServiceBulletPoint>●</ServiceBulletPoint>
                            {service}
                        </ServiceListItem>
                    ))}
                </ServicesList>
            </div>
        }

        {quote && 
            <QuoteRow>
                <Quote>{truncateString(quote, 125)}</Quote>
                {' - '} 
                <QuoteLink href="#">Read more</QuoteLink> 
            </QuoteRow>
        }

    </InfoColContainer>
);

export default InfoColumn;