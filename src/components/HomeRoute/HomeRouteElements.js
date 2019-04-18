import styled from 'styled-components';
import { Row } from '../LayoutElements';

export const HeaderContentContainer = styled(Row)`
    display: flex;
    align-items: center;
`;

export const YellLogoFull = styled.img`
  width: 120px;
  height: auto;
`;

export const HeroTitle = styled.h1`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 2.25rem;
    color: #fff;
    margin-top: 100px;
    margin-bottom: 40px;
    span {
        color: ${({ theme }) => theme.colors.brand };
    }
`;