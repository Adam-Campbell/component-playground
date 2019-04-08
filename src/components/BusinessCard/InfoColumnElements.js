import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InfoColContainer = styled.div`
    width: 65%;
    padding: 0 10px;
    border-right: solid 1px #aaa;
`;

export const BusinessNameRow = styled.div`
    display: flex;
    margin-left: -10px;
    margin-right: -10px;
`;

export const BusinessName = styled.h1`
    font-family: 'Montserrat';
    font-weight: 700;
    color: #222;
    text-decoration: none;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10px;
`;

export const LinkWrapper = styled(Link)`
    text-decoration: none;
    color: #222;
    &:hover {
        text-decoration: underline;
    }
`;

export const LoyaltyBanner = styled.div`
    background-color: #e74d3d;
    margin-left: auto;
    display: flex;
    align-items: center;
    width: 120px;
    padding-left: 10px;
    position: relative;
    height: 35px;
    &:after {
        content: ' ';
        display: block;
        position: absolute;
        left: -15px;
        top: 0;
        border-left: solid 15px transparent;
        border-bottom: solid 35px #e74d3d;
        border-right: 0;
    }
`;

export const LoyaltyYears = styled.span`
    font-family: 'Lato';
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    margin-right: 10px;
`;

export const LoyaltyText = styled.span`
    font-family: 'Lato';
    font-size: 0.75rem;
    font-weight: 400;
    color: #fff;
`;

export const CategoryRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-right: -10px;
    margin-bottom: 10px;
`;

export const CategoryLabel = styled.p`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 0.85rem;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 10px;
    color: #222;
`;

export const LinkRow = styled.div`
    display: flex;
`;

export const ButtonLink = styled(Link)`
    display: flex;
    align-items: center;
    background: #fedb00;
    transition: background ease-out 0.2s;
    border: none;
    border-radius: 3px;
    text-decoration: none;
    font-family: 'Lato';
    font-weight: 400;
    font-size: 0.85rem;
    color: #222;
    padding: 7px 12px;
    & + & {
        margin-left: 10px;
    }
    &:hover {
        background: #cab010;
    }
    .svg-inline--fa {
        margin-right: 5px;
        font-size: 1.1rem;
    }
`;

export const AddressLink = styled(Link)`
    color: #0083c3;
    font-family: 'Lato';
    font-weight: 400;
    font-size: 0.85rem;
    text-decoration: none;
    margin-top: 10px;
    margin-bottom: 10px;
    display: inline-block;
    &:hover {
        text-decoration: underline;
    }
`;

export const ServicesList = styled.ul`
    list-style-type: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-right: -10px;
`;

export const ServiceListItem = styled.li`
    width: 50%;
    font-family: 'Lato';
    font-weight: 300;
    font-size: 0.85rem;
    color: #222;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 3px;
    margin-bottom: 3px;
`;

export const ServiceBulletPoint = styled.span`
    color: #aaa;
    font-size: 0.7rem;
    margin-right: 5px;
`;

export const QuoteRow = styled.div`
    font-family: 'Lato';
    font-weight: 300;
    font-size: 0.75rem;
    color: #555;
`;

export const Quote = styled.q`
    font-style: italic;
`;

export const QuoteLink = styled(Link)`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 0.75rem;
    color: #0083c3;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;