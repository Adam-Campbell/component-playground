import React from 'react';
import PropTypes from 'prop-types';
import {
    BackgroundHolder,
    Overlay,
    ContentHolder
} from './elements';

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
};
