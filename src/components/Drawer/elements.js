import styled from 'styled-components';

export const Container = styled.div`
    margin: 20px 0;
`;

export const  Fieldset = styled.fieldset`
    border: none;
    border-bottom: solid 1px ${({ theme }) => theme.colors.UIPrimary };
    padding: 10px 5px;
`;

export const Legend = styled.legend`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.textPrimary };
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        color: ${({ theme }) => theme.colors.textAlt };
    }
`;

export const LegendContentContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const LegendChevron = styled.span`
    transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform ease-out 0.2s;
    color: ${({ theme }) => theme.colors.UIPrimary };
    font-size: 1.5rem;
    margin-left: auto;
    ${Legend}:hover & {
        color: ${({ theme }) => theme.colors.textAlt };
    }
`;

export const InputsMainContainer = styled.div`
    overflow-y: hidden;
    height: ${({ isOpen }) => isOpen ? 'auto' : '0'};
    padding-left: 10px;
    padding-right: 10px;
`;

export const InputContainer = styled.div`
    margin-top: 16px;
    margin-bottom: 16px;
    transform: ${({ isOpen }) => isOpen ? 'scaleY(1)' : 'scaleY(0.8)'};
    transform-origin: top;
    opacity: ${({ isOpen }) => isOpen ? 1 : 0};
    transition: all ease-out 0.2s;
    transition-delay: 0.1s;
`;

export const Input = styled.input`
    opacity: 0;
    position: absolute;
    left: -9999px;
`;

export const InputLabel = styled.label`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textPrimary }; 
    display: flex;
    align-items: center;
    cursor: pointer;
    ${({ capitalize }) => capitalize && 'text-transform: capitalize;'}
    &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.textAlt }
    }
    &:before {
        content: ' ';
        display: inline-block;
        height: 14px;
        width: 14px;
        border-radius: 50%;
        border: solid ${({ theme }) => theme.colors.UIPrimary } 1px;
        background: transparent;
        transition: all ease-out 0.2s;
        margin-right: 10px;
    }
    ${Input}:checked + & {
        font-weight: 700;
    }
    ${Input}:checked + &:before {
        background: ${({ theme }) => theme.colors.brand };
        
    }
`;