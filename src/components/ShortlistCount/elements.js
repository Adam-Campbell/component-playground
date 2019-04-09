import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledShortlistCount = styled(Link)`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 1.1rem;
    color: #222;
    flex-shrink: 0;
    margin: 0 auto 0 0;
    height: 42px;
    display: flex;
    align-items: center;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export const StyledShortlistCountWithItems = styled(StyledShortlistCount)`
    color: #0083c3;
`;

export const ShortlistNumber = styled.span`
    display: inline-block;
    background: #1abc9c;
    color: white;
    width: 20px;
    height: 20px;
    margin-left: 5px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;