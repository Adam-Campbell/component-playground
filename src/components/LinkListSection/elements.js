import styled from 'styled-components';
import { Row } from '../LayoutElements';
import { Link } from 'react-router-dom';

export const StyledLinkListSection = styled.section`
    background: ${({ theme }) => theme.colors.background };
    padding: 30px 0;
    min-height: 300px;
`;

export const ContentContainer = styled(Row)`
    border-top: solid 1px ${({ theme }) => theme.colors.UIPrimary };
`;

export const PrimaryLinkContainer = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const PrimaryLink = styled(Link)`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.textPrimary };
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export const List = styled.ul`
    list-style-type: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: -10px;
    margin-right: -10px;
    display: flex;
    flex-wrap: wrap;
`;

export const ListItem = styled.li`
    padding: 10px;
    width: 33.33333%;
    @media (min-width: 1250px) {
        width: 25%;
    }
`;

export const ListItemLink = styled(Link)`
    font-family: 'Lato';
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textPrimary };
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
    @media (min-width: 960px) {
        font-size: 1.1rem;
    }
`;
