import React from 'react';
import PropTypes from 'prop-types';
import {
    StyledLinkListSection,
    ContentContainer,
    PrimaryLinkContainer,
    PrimaryLink,
    List,
    ListItem,
    ListItemLink
} from './elements';

export const LinkListSection = ({ title, items }) => (
    <StyledLinkListSection>
        <ContentContainer>
            <PrimaryLinkContainer>
                <PrimaryLink to="/" >
                    {title}
                </PrimaryLink>
            </PrimaryLinkContainer>
            <List>
                {items.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemLink to="/">
                            {item}
                        </ListItemLink>
                    </ListItem>
                ))}
                
            </List>
        </ContentContainer>
    </StyledLinkListSection>
);

LinkListSection.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string)
};
