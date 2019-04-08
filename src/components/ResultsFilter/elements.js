import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
    padding-left: 10px;
`;

export const FilterIcon = styled(FontAwesomeIcon)`
    font-size: 1.25rem;
    margin-right: 20px;
    color: #aaa;
`;

export const Title = styled.p`
    font-family: 'Lato';
    font-weight: 700;
    font-size: 1.25rem;
    color: #222;
    margin-top: 0;
    margin-bottom: 0;
`;
