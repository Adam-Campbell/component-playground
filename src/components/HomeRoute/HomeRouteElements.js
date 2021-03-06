import styled from 'styled-components';
import { Row } from '../LayoutElements';
import SpriteSheet from '../SpriteSheet';

export const HeaderContentContainer = styled(Row)`
    display: flex;
    align-items: center;
`;

// export const YellLogoFull = styled.img`
//   width: 120px;
//   height: auto;
// `;

export const YellLogoFull = styled(SpriteSheet)`
    width: 123px;
    height: 40px;
    background-position: 0 -454px;
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