import styled from 'styled-components';
import SpriteSheet from '../SpriteSheet';
import { Row } from '../LayoutElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeaderContentContainer = styled(Row)`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const Logo = styled(SpriteSheet)`
    width: 42px;
    height: 42px;
    background-position: 0 -365px;
    flex-shrink: 0;
`;

export const BreadcrumbsRow = styled(Row)`
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    align-items: center;
`;

export const SocialShareLinksContainer = styled.div`
    display: flex;
    margin-left: auto;
`;

export const ResultsHeaderRow = styled(Row)`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: solid 1px ${({ theme }) => theme.colors.UIPrimary };
    @media (min-width: 960px) {
        flex-wrap: nowrap;
    }
`;

export const ResultsSummary = styled.h1`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.textPrimary };
    width: 100%;
    span {
        text-transform: capitalize;
        font-weight: 700;
    }
    @media (min-width: 960px) {
        width: initial;
    }
`;

export const ResultsHeaderButton = styled.button`
    font-family: 'Lato';
    font-size: 1.1rem;
    font-weight: 400;
    color: ${({ isActive, theme }) => isActive ? '#fff' : theme.colors.textPrimary};
    border: solid 1px ${({ theme }) => theme.colors.UIPrimary };
    border-radius: 3px;
    padding: 10px 20px;
    background: ${({ isActive, theme }) => isActive ? '#339ccf' : theme.colors.background};
    cursor: pointer;
    text-decoration: none;
    width: 160px;
    text-align: center;
    transition: background ease-out 0.2s;
    &:hover {
        background: ${({ isActive }) => isActive ? '#339ccf' : '#f2f2f2'};
    }
    @media (min-width: 960px) {
        display: none;
    }
    & + & {
        margin-left: 10px;
    }
`;

export const ResultsHeaderButtonIcon = styled(FontAwesomeIcon)`
    margin-right: 10px;
`;