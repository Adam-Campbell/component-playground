import React from 'react';
import {
    Nav,
    NavRow,
    NavList,
    NavItem,
    StyledNavLink,
    StyledActiveNavLink,
    AdditionalContentContainer
} from './elements';

export const Header = (props) => (
    <header>
        <Nav>
            <NavRow>
                <NavList>
                    <NavItem>
                        <StyledActiveNavLink to="/">Yell.com</StyledActiveNavLink>
                    </NavItem>
                    <NavItem>
                        <StyledNavLink to="/results">Yell Business</StyledNavLink>
                    </NavItem>
                    <NavItem pushRight>
                        <StyledNavLink to="#">Download the app</StyledNavLink>
                    </NavItem>
                    <NavItem>
                        <StyledNavLink to="#">Get a free listing</StyledNavLink>
                    </NavItem>
                    <NavItem>
                        <StyledNavLink to="#">Advertise 0800 777 449</StyledNavLink>
                    </NavItem>
                </NavList>
            </NavRow>
        </Nav>
        <AdditionalContentContainer>
            {props.children}
        </AdditionalContentContainer>
    </header>
);
