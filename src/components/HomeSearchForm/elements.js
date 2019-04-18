import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
    margin-bottom: 300px;
`;

export const Fieldset = styled.fieldset`
    border: none;
    padding: 0;
`;

export const FieldsContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const SubmitButton = styled.button`
    padding: 10px 50px;
    font-family: 'Lato';
    font-weight: 400;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.textPrimary };
    background: ${({ theme }) => theme.colors.brand };
    border: none;
    border-radius: 0 3px 3px 0;
    outline: none;
    cursor: pointer;
    &:hover,
    &:focus {
        background: ${({ theme }) => theme.colors.brandDarkened };
    }
`;

export const InputContainer = styled.div`
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
    background: ${({ theme }) => theme.colors.background };
    display: flex;
    align-items: center;
    border: solid 1px;
    border-color: ${props => getBorderColor(props.isActive, props.hasError)};
`;

export const IconContainer = styled.div`
    color: ${({ isActive, theme }) => isActive ? theme.colors.brand : theme.colors.UIPrimary};
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1.25rem;
`;

export const InputElement = styled.input`
    padding: 10px;
    font-family: 'Lato';
    font-weight: 400;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.textPrimary };
    outline: none;
    border: none;
`;

export const ClearFieldIconContainer = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.UIPrimary };
    .fa-times {
        cursor: pointer;
    }
`;

export const SuggestionsList = styled.ul`
    position: absolute;
    background: ${({ theme }) => theme.colors.background };
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style-type: none;
    border: solid 1px ${({ theme }) => theme.colors.UIPrimary };
    border-top: none;
    width: 100%;
`;

export const SuggestionItem = styled.li`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textPrimary };
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
    color: #fff;
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
    color: #fff;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 10px;
`;