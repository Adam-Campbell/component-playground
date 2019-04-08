import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RatingsColContainer = styled.div`
    width: 20%;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
`;

export const ReviewLink = styled(Link)`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 1rem;
    color: #0083c3;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export const AdditionalLinksContainer = styled.div`
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ShortlistLink = styled(Link)`
    font-family: 'Lato';
    font-weight: 300;
    font-size: 0.85rem;
    color: #0083c3;
    text-decoration: none;
    margin-bottom: 5px;
    &:hover {
        text-decoration: underline;
    }
`;

export const RatingsColButtonLink = styled(Link)`
    background: #fedb00;
    transition: background ease-out 0.2s;
    border: none;
    border-radius: 3px;
    text-decoration: none;
    font-family: 'Lato';
    font-weight: 400;
    color: #222;
    padding: 10px 10px;
    width: 100%;
    text-align: center;
    &:hover {
        background: #cab010;
    }
`;
