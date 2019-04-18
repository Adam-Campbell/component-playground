import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse1 = keyframes`
    0% {
        transform: scaleY(0.5);
    }
    50% {
        transform: scaleY(1);
    }
    100% {
        transform: scaleY(0.5);
    }
`;

const pulse2 = keyframes`
    0% {
        transform: scaleY(0.75);
    }
    25% {
        transform: scaleY(0.5);
    }
    75% {
        transform: scaleY(1);
    }
    100% {
        transform: scaleY(0.75);
    }
`;

const pulse3 = keyframes`
    0% {
        transform: scaleY(1);
    }
    50% {
        transform: scaleY(0.5);
    }
    100% {
        transform: scaleY(1);
    }
`;

const StyledLoader = styled.div`
    margin-top: 80px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

const LoaderLineContainer = styled.div`
    width: 60px;
    height: 42px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`;

const LoaderText = styled.p`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.textPrimary }; 
`;

const LoaderLine = styled.span`
    background-color: ${({ theme }) => theme.colors.textPrimary };
    width: 10px;
    height: 100%;
    display: inline-block;
    border-radius: 3px;
    margin-left: 3px;
    margin-right: 3px;
    animation: ${({animation}) => animation} 0.65s infinite linear;
`;


export const Loader = () => (
    <StyledLoader>
        <LoaderLineContainer>
            <LoaderLine animation={pulse1}/>
            <LoaderLine animation={pulse2}/>
            <LoaderLine animation={pulse3}/>
        </LoaderLineContainer>
        <LoaderText>Loading data...</LoaderText>
    </StyledLoader>
);
