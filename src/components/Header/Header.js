import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row } from '../LayoutElements';

const Nav = styled.nav`
    background: #333;
    padding: 10px 30px;
`;

const NavRow = styled(Row)`
    display: flex;
`;

const NavList = styled.ul`
    display: flex; 
    list-style-type: none;
    padding-left: 0;
    width: 100%;
    margin: 0;
`;

const NavItem = styled.li`
    margin-left: ${props => props.pushRight ? 'auto' : '10px'};
    margin-right: 10px;
`;

const NavLink = styled.a`
    font-family: 'Lato';
    font-size: 0.85rem;
    font-weight: 400;
    text-decoration: none;
    color: ${props => props.isSelected ? 'gold' : 'white'};
    ${props => props.isSelected && `
        position: relative;
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
            border-bottom: solid 8px white;
        }
    `}
    &:hover {
        text-decoration: underline;
    }
`;

const AdditionalContentContainer = styled.div`
    background: white;
    padding: 15px;
    border-bottom: solid gold 4px;
`;

export const Header = (props) => (
    <header>
        <Nav>
            <NavRow>
                <NavList>
                    <NavItem>
                        <NavLink isSelected href="/">Yell.com</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/results">Yell Business</NavLink>
                    </NavItem>
                    <NavItem pushRight>
                        <NavLink href="#">Download the app</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Get a free listing</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Advertise 0800 777 449</NavLink>
                    </NavItem>
                </NavList>
            </NavRow>
        </Nav>
        <AdditionalContentContainer>
            {props.children}
        </AdditionalContentContainer>
    </header>
);
