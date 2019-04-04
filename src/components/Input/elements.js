import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
`;

const getBorderColor = (isActive, hasError) => {
    if (hasError) {
        return '#e74d3d';
    } else {
        return isActive ? '#349af3' : '#aaa';
    }
}

export const InputRow = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    border: solid 1px;
    border-color: ${props => getBorderColor(props.isActive, props.hasError)};
`;

// border-color: ${props => props.isActive ? '#349af3' : '#aaa'};

export const IconContainer = styled.div`
    color: ${props => props.isActive ? '#fedb00' : '#aaa'};
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1.25rem;
`;

export const InputElement = styled.input`
    padding: 10px;
    font-family: 'Lato';
    font-weight: 400;
    font-size: 1.1rem;
    color: #222;
    outline: none;
    border: none;
`;

export const ClearFieldIconContainer = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1.25rem;
    color: #aaa;
    .fa-times {
        cursor: pointer;
    }
`;

export const SuggestionsList = styled.ul`
    position: absolute;
    background: white;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style-type: none;
    border: solid 1px #aaa;
    border-top: none;
    width: 100%;
`;

export const SuggestionItem = styled.li`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 0.85rem;
    color: #222;
    padding: 10px;
    text-align: left;
    ${props => !props.isPlaceholder && `
        cursor: pointer;
        &:hover {
            color: #0083c3;
        }
    `}  
`;

export const WarningContainer = styled.div`
    position: absolute;
    background-color: #e74d3d;
    color: white;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 6px 10px;
    .fa-exclamation-circle {
        font-size: 1.5rem;
    }
`;

export const WarningText = styled.p`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 0.85rem;
    color: white;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 10px;
`;
