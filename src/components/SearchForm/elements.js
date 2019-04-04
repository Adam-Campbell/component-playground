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
    color: #222;
    background: #fedb00;
    border: none;
    border-radius: 0 3px 3px 0;
    outline: none;
    cursor: pointer;
    &:hover,
    &:focus {
        background: #cab010;
    }
`;