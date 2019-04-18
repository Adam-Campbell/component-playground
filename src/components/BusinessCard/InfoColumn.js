import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
    InfoColContainer,
    BusinessNameRow,
    BusinessName,
    LinkWrapper,
    LoyaltyBanner,
    LoyaltyYears,
    LoyaltyText, 
    CategoryRow,
    CategoryLabel,
    LinkRow,
    ButtonLink, 
    AddressLink,
    ServicesList,
    ServiceListItem,
    ServiceBulletPoint,
    QuoteRow,
    Quote,
    QuoteLink
} from './InfoColumnElements';

const truncateString = (str, max) => str.length <= max ? str : str.slice(0, max).concat('...');

const InfoColumn = ({ name, categories, email, url, phone, address, bulletPoints, quote, isLongTermCustomer }) => (
    <InfoColContainer>

        <BusinessNameRow>
            <LinkWrapper to="/">
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
            {email && <ButtonLink to={`email::${email}`}>
                <FontAwesomeIcon icon={faEnvelope} />
                Email
            </ButtonLink>}
            {url && <ButtonLink to={url}>
                <FontAwesomeIcon icon={faGlobe} />
                Website
            </ButtonLink>}
            {phone && <ButtonLink to={`call::${phone}`}>
                <FontAwesomeIcon icon={faPhone} />
                Call
            </ButtonLink>}
        </LinkRow>

        <div>
            <AddressLink to="/">
                {address}
            </AddressLink>
        </div>

        {bulletPoints.length > 0 && 
            <div>
                <ServicesList>
                    {bulletPoints.map((bulletPoint, index) => (
                        <ServiceListItem key={index}>
                            <ServiceBulletPoint>●</ServiceBulletPoint>
                            {bulletPoint}
                        </ServiceListItem>
                    ))}
                </ServicesList>
            </div>
        }

        {quote && 
            <QuoteRow>
                <Quote>{truncateString(quote, 125)}</Quote>
                {' - '} 
                <QuoteLink to="/">Read more</QuoteLink> 
            </QuoteRow>
        }

    </InfoColContainer>
);

InfoColumn.propTypes = {
    name: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    email: PropTypes.string,
    url: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    bulletPoints: PropTypes.arrayOf(PropTypes.string),
    quote: PropTypes.string,
    isLongTermCustomer: PropTypes.bool
};

export default InfoColumn;