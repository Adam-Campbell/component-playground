import styled from 'styled-components';
import { Row } from '../LayoutElements';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    background: #333;
    padding: 10px 0;
`;

export const NavRow = styled(Row)`
    display: flex;
`;

export const NavList = styled.ul`
    display: flex; 
    list-style-type: none;
    padding-left: 0;
    width: 100%;
    margin: 0;
`;

export const NavItem = styled.li`
    margin-left: ${props => props.pushRight ? 'auto' : '10px'};
    margin-right: 10px;
`;

export const StyledNavLink = styled(Link)`
    font-family: 'Lato';
    font-size: 0.85rem;
    font-weight: 400;
    text-decoration: none;
    color: #fff;
    &:hover {
        text-decoration: underline;
    }
`;

export const StyledActiveNavLink = styled(StyledNavLink)`
    position: relative;
    color: ${({ theme }) => theme.colors.brand };
    &:before {
        content: ' ';
        position: absolute;
        bottom: -11px;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        display: block;
        border-left: solid 8px transparent;
        border-right: solid 8px transparent;
        border-bottom: solid 8px #fff;
    }
`;

export const AdditionalContentContainer = styled.div`
    background: white;
    padding: 15px;
    border-bottom: solid ${({ theme }) => theme.colors.brandAlt } 4px;
`;