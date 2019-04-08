import styled from 'styled-components';

export const BackgroundHolder = styled.div`
    background-image: url('${props => props.imageURL}');
    background-size: cover;
    background-position: 50% 50%;
`;

export const Overlay = styled.div`
    background: rgba(17,17,17,0.4);
    padding-left: 30px;
    padding-right: 30px; 
`;

export const ContentHolder = styled.div`
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;