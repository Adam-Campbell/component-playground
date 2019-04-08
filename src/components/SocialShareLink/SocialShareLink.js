import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

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

export const SocialShareLink = ({ platform }) => {
    const { icon, hoverColor } = getSocialPlatformProps(platform);
    return (
        <StyledSocialShareLink href="/" hoverColor={hoverColor}>
            <FontAwesomeIcon icon={icon} />
        </StyledSocialShareLink>
    );
};

SocialShareLink.propTypes = {
    platform: PropTypes.oneOf([
        'facebook',
        'twitter'
    ]).isRequired
};
