import React from 'react';
import PropTypes from 'prop-types';
import {
    ImageColContainer,
    ProfileImage
} from './ImageColumnElements';

const ImageColumn = ({ profileImage }) => (
    <ImageColContainer>
        <ProfileImage 
            src={profileImage}
            alt=""
        />
    </ImageColContainer>
);

ImageColumn.propTypes = {
    profileImage: PropTypes.string
};

export default ImageColumn;