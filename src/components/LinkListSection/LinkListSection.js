import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row } from '../LayoutElements';

const StyledLinkListSection = styled.section`
    background: white;
    padding: 30px 0;
    min-height: 300px;
`;

const ContentContainer = styled(Row)`
    border-top: solid 1px #aaa;
`;

const PrimaryLinkContainer = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
`;

const PrimaryLink = styled.a`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 1.25rem;
    color: #222;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const List = styled.ul`
    list-style-type: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: -10px;
    margin-right: -10px;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    padding: 10px;
    width: 33.33333%;
    @media (min-width: 1250px) {
        width: 25%;
    }
`;

const ListItemLink = styled.a`
    font-family: 'Lato';
    font-size: 1rem;
    font-weight: 400;
    color: #222;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
    @media (min-width: 960px) {
        font-size: 1.1rem;
    }
`;

export const LinkListSection = ({ title, items }) => (
    <StyledLinkListSection>
        <ContentContainer>
            <PrimaryLinkContainer>
                <PrimaryLink href="#" >
                    {title}
                </PrimaryLink>
            </PrimaryLinkContainer>
            <List>
                {items.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemLink href="#">
                            {item}
                        </ListItemLink>
                    </ListItem>
                ))}
                
            </List>
        </ContentContainer>
    </StyledLinkListSection>
);
