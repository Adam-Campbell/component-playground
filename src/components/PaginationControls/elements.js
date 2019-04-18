import styled from 'styled-components';

export const StyledPaginationControls = styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const PageButton = styled.button`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 0.85rem;
    color: ${({ isActive, theme }) => isActive ? '#fff' : theme.colors.textPrimary};
    border: none;
    border-radius: 3px;
    height: 30px;
    width: 30px;
    background: ${({ isActive, theme }) => isActive ? theme.colors.textAlt : '#e5e5e5'};
    transition: background ease-out 0.2s;
    cursor: pointer;
    margin-left: 5px;
    margin-right: 5px;
    &:hover {
        background: ${({ isActive }) => isActive ? '#339ccf' : '#f2f2f2'};
    }
    &:disabled {
        color: ${({ theme }) => theme.colors.UIPrimary };
        cursor: initial;
        &:hover {
            background: #e5e5e5;
        }
    }
`;

export const PrevButton = styled(PageButton)`
    margin-right: auto;
    margin-left: 0;
    width: 120px;
`;

export const NextButton = styled(PageButton)`
    margin-left: auto;
    margin-right: 0;
    width: 120px;
`;







