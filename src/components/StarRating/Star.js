import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    width: 20px;
    
`;

const Star = ({ value, idName }) => (
    <SVG  id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1073.15 1020.63">
        <defs>
            <linearGradient id={idName}>
                <stop offset={`${value*100}%`} stopColor="gold" />
                <stop offset={`${value*100}%`} stopColor="gainsboro" />
            </linearGradient>  
        </defs>
        <title>star</title>
        <polygon className="cls-1" fill={`url('#${idName}')`} points="536.57 845.72 205.62 1019.71 268.82 651.18 1.07 390.19 371.1 336.43 536.57 1.13 702.05 336.43 1072.07 390.19 804.32 651.18 867.53 1019.71 536.57 845.72"/>
        <path d="M540,31.95,704.91,366.1l.23.47.52.08,368.76,53.58L807.59,680.33l-.38.37.09.52,63,367.27L540.47,875.08l-.47-.24-.47.24-329.83,173.4,63-367.27.09-.52-.38-.37L5.57,420.23l368.76-53.58.52-.08.23-.47L540,31.95m0-2.26-165.81,336L3.43,419.53,271.71,681l-63.33,369.27L540,876l331.62,174.34L808.29,681l268.29-261.52L705.81,365.66,540,29.69Z" transform="translate(-3.43 -29.69)"/>
    </SVG>
);

export default Star;