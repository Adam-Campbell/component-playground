import styled from 'styled-components';

export const StyledShortlistButton = styled.button`
    font-family: 'Lato';
    font-weight: 300;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textAlt };
    margin-bottom: 5px;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    display: flex;
    align-items: center;
`;

export const ShortlistButtonText = styled.p`
    margin: 0;
    font-weight: 400;
    &:hover {
        text-decoration: underline;
    }
`;

export const ShortlistButtonAction = styled.span`
    border: solid 1px;
    border-radius: 50%;
    color: ${({ isShortlisted }) => isShortlisted ? '#e74d3d' : '#43b02a'};
    background: white;
    height: 20px;
    width: 20px;
    display: inline-block;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        text-decoration: none;
    }
`;