import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row } from '../LayoutElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

/*

This component will contain the breadcrumbs and the social sharing icons.

Breadcrumbs can be constructed from an array of objects, each with two properties - text and url.

*/

const LocationBarRow = styled(Row)`
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    align-items: center;
`;

const SocialShareLinksContainer = styled.div`
    display: flex;
    margin-left: auto;
`;

const StyledSocialShareLink = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    & + & {
        margin-left: 10px;
    }
    &:hover {
        background: ${({ hoverColor }) => hoverColor};
    }
`;

const BreadcrumbsList = styled.ol`
    list-style-type: none;
    font-family: 'Lato';
    font-weight: 400;
    font-size: 0.85rem;
    color: #222;
    margin: 0;
    padding-left: 0;
`;

const BreadcrumbsListItem = styled.li`
    display: inline-block;
`;

const BreadcrumbsLink = styled.a`
    display: inline-block;
    color: #0083c3;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const BreadcrumbsSeperator = styled.span`
    margin-left: 5px;
    margin-right: 5px;
    font-weight: 700;
`;

const breadcrumbsData = [
    {
        url: 'http://localhost:3000/',
        text: 'Home'
    },
    {
        url: 'http://localhost:3000/results/glasgow',
        text: 'Glasgow'
    },
    {
        url: 'http://localhost:3000/results/glasgow/cafes',
        text: 'Cafes & Coffee Shops'
    }
];

const Breadcrumbs = ({ breadcrumbsArray }) => {
    const crumbs = breadcrumbsArray.slice(0, breadcrumbsArray.length-1);
    const curr = breadcrumbsArray[breadcrumbsArray.length-1];
    return (
        <nav>
            <BreadcrumbsList>
                {crumbs.map((crumb, index) => (
                    <BreadcrumbsListItem key={index}>
                        <BreadcrumbsLink href={crumb.url}>
                            {crumb.text}
                        </BreadcrumbsLink>
                        <BreadcrumbsSeperator>
                            >
                        </BreadcrumbsSeperator>
                    </BreadcrumbsListItem>
                ))}
                <BreadcrumbsListItem>
                    <p>{curr.text}</p>
                </BreadcrumbsListItem>
            </BreadcrumbsList>
        </nav>
    );
}


const getSocialPlatformProps = (platform) => {
    switch (platform) {
        case 'facebook':
            return {
                icon: faFacebookF,
                hoverColor: '#3b5998'
            };

        case 'twitter':
            return {
                icon: faTwitter,
                hoverColor: '#55acee'
            };

        default:
            return {
                icon: faFacebookF,
                hoverColor: '#3b5998'
            };
    }
}


const SocialShareLink = ({ platform }) => {
    const { icon, hoverColor } = getSocialPlatformProps(platform);
    return (
        <StyledSocialShareLink hoverColor={hoverColor}>
            <FontAwesomeIcon icon={icon} />
        </StyledSocialShareLink>
    );
};


export const LocationBar = (props) => (
    <LocationBarRow>
        <Breadcrumbs breadcrumbsArray={breadcrumbsData} />
        <SocialShareLinksContainer>
            <SocialShareLink platform="facebook" />
            <SocialShareLink platform="twitter" />  
        </SocialShareLinksContainer>
    </LocationBarRow>
);

LocationBar.propTypes = {

};
