import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledShortlistSummary = styled.div`
    padding: 10px;
`;


export const ShortlistTopRow = styled.div`
    display: flex;
    align-items: center;
`;

export const ShortlistTitle = styled.h3`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.textPrimary };
    margin: 0;
`;

export const RemoveAllButton = styled.button`
    font-family: 'Lato';
    font-size: 0.85rem;
    background: none;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.textAlt };
    cursor: pointer;
    margin-left: auto;
    &:hover {
        text-decoration: underline;
    } 
`;

export const ShortlistBusinessList = styled.ul`
    list-style-type: none;
    margin: 10px 0;
    padding: 0;
`;

export const ShortlistBottomRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ShortlistLink = styled.a`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textAlt };
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        text-decoration: underline;
    }
`;

export const ShortlistLinkIcon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.textPrimary };
    font-size: 1.1rem;
    margin-right: 5px;
`;


export const ShortlistDescriptionText = styled.p`
    font-family: 'Lato';
    font-weight: 300;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textPrimary };
`;

export const StyledShortlistSummaryItem = styled.li`
    border-bottom: solid 1px ${({ theme }) => theme.colors.UIPrimary };
    padding: 10px 0;
`;

export const SummaryItemLink = styled.a`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.textAlt };
    text-decoration: none;
    margin-right: 35px;
    &:hover {
        text-decoration: underline;
    }
`;

export const SummaryItemText = styled.p`
    font-family: 'Lato';
    font-size: 0.85rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textPrimary };
    strong {
        margin-right: 5px;
    }
`;

export const RemoveBusinessButton = styled.button`
    background: none;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.textPrimary };
    font-size: 1.25rem;
    float: right;
    cursor: pointer;
`;