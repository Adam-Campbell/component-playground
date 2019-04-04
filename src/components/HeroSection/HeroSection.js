import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BackgroundHolder = styled.div`
    background-image: url('${props => props.imageURL}');
    background-size: cover;
    background-position: 50% 50%;
`;

const Overlay = styled.div`
    background: rgba(17,17,17,0.4);
    padding-left: 30px;
    padding-right: 30px; 
`;

const ContentHolder = styled.div`
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const HeroSection = ({ imageURL, children }) => (
    <BackgroundHolder imageURL={imageURL}>
        <Overlay>
            <ContentHolder>
                {children}
            </ContentHolder>
        </Overlay>
    </BackgroundHolder>
);

HeroSection.propTypes = {
    imageURL: PropTypes.string.isRequired
}