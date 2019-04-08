import styled from 'styled-components';

export const StyledBusinessCardContainer = styled.article`
    width: 100%;
    min-height: 150px;
    margin: 0 auto;
    padding: 20px 10px;
    cursor: pointer;
    border: solid 1px #aaa;
    border-radius: 4px;
    display: flex;
    align-items: stretch;
    &:hover {
        box-shadow: 0px 0px 5px #ccc;
    }
    & + & {
        margin-top: 30px;
    }
`;