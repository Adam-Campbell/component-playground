import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageColContainer = styled.div`
    width: 15%;
    padding: 0 10px;
`;

const ProfileImage = styled.img`
    max-width: 100%;
`;

const ImageColumn = ({ profileImage }) => (
    <ImageColContainer>
        <ProfileImage 
            src={profileImage}
            alt=""
        />
    </ImageColContainer>
);

export default ImageColumn;