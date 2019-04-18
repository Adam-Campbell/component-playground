import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BreadcrumbsList = styled.ol`
    list-style-type: none;
    font-family: 'Lato';
    font-weight: 400;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 0;
    padding-left: 0;
`;

export const BreadcrumbsListItem = styled.li`
    display: inline-block;
    text-transform: capitalize;
`;

export const BreadcrumbsLink = styled(Link)`
    display: inline-block;
    color: ${({ theme }) => theme.colors.textAlt };
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export const BreadcrumbsSeperator = styled.span`
    margin-left: 5px;
    margin-right: 5px;
    font-weight: 700;
`;