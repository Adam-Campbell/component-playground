import styled from 'styled-components';
import SpriteSheet from '../SpriteSheet';
import { Row } from '../LayoutElements';

export const Logo = styled(SpriteSheet)`
    width: 42px;
    height: 42px;
    background-position: 0 -365px;
    flex-shrink: 0;
`;

export const HeaderContentContainer = styled(Row)`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const Advert = styled.div`
    width: 100%;
    height: 320px;
    margin-top: 10px;
    margin-bottom: 10px;
    background: ${({ theme }) => theme.colors.brandAlt };
`;

export const IntroRow = styled(Row)`
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    align-items: center;
    border-bottom: solid 1px ${({ theme }) => theme.colors.UIPrimary };
    margin-bottom: 20px;
`;

export const Title = styled.h1`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.textPrimary };
`;

export const SocialShareLinksContainer = styled.div`
    display: flex;
    margin-left: auto;
`;