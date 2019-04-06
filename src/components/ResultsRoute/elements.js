import styled from 'styled-components';
import SpriteSheet from '../SpriteSheet';
import { Row } from '../LayoutElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Body = styled.div`
    overflow-x: hidden;
`;

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

export const Shortlist = styled.p`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 1.1rem;
    color: #222;
    flex-shrink: 0;
    margin: 0 10px;
    height: 42px;
    display: flex;
    align-items: center;
`;


export const ResultsContentContainer = styled(Row)`
    display: flex;
`;

export const ResultsMainContent = styled.main`
    position: relative;
    width: 748px;
    flex-shrink: 0;
    min-height: 400px;
    @media (min-width: 960px) {
        width: calc(100% - 260px);
    }
    @media (min-width: 1250px) {
        width: calc(100% - 340px);
    }
`;

export const ResultsAside = styled.aside`
    display: ${({ showFilters }) => showFilters ? 'initial' : 'none'};
    width: 260px;
    flex-shrink: 0;
    min-height: 400px;
    padding-right: 30px;
    @media (min-width: 960px) {
        display: initial;
    }
    @media (min-width: 1250px) {
        width: 340px;
    }
`;

export const MapPod = styled.div`
    width: 100%;
    background: rebeccapurple;
    height: 90px;
    border: none;
    border-radius: 3px;
    display: none;
    @media (min-width: 960px) {
        display: initial;
    }
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
    border-bottom: solid 1px #aaa;
    @media (min-width: 960px) {
        flex-wrap: nowrap;
    }
`;

export const ResultsSummary = styled.h1`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 1.5rem;
    color: #222;
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
    color: ${({ isActive }) => isActive ? '#fff' : '#222'};
    border: solid 1px #aaa;
    border-radius: 3px;
    padding: 10px 20px;
    background: ${({ isActive }) => isActive ? '#339ccf' : '#fff'};
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