import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StandardLink = styled(Link)`
    display: flex;
    flex-shrink: 0;
    height: 42px;
    align-items: center;
    font-family: 'Lato';
    font-weight: 400;
    font-size: 0.85rem;
    color: #222;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
    .fa-user-circle {
        font-size: 2rem;
        margin-right: 5px;
    }
    .fa-angle-right {
        font-size: 1.25rem;
        margin-left: 40px;
        display: none;
        @media (min-width: 960px) {
            display: initial;
        }
    }
    span {
        display: none;
        @media (min-width: 960px) {
            display: initial;
        }
    }
`;

export const PushRightLink = styled(StandardLink)`
    margin-left: auto;
`;