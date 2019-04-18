import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ShortlistCountContainer = styled.div`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.textPrimary };
    flex-shrink: 0;
    margin: 0 auto 0 0;
    height: 42px;
    display: flex;
    align-items: center;
    text-decoration: none;
`;

export const ShortlistCountLink = styled(Link)`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.textAlt };
    text-decoration: none;
    &:hover p {
        text-decoration: underline;
    }
`;

export const ShortlistNumber = styled.span`
    display: inline-block;
    background: #1abc9c;
    color: white;
    width: 24px;
    height: 24px;
    margin-left: 5px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`;
