import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BreadcrumbsList = styled.ol`
    list-style-type: none;
    font-family: 'Lato';
    font-weight: 400;
    font-size: 0.85rem;
    color: #222;
    margin: 0;
    padding-left: 0;
`;

const BreadcrumbsListItem = styled.li`
    display: inline-block;
`;

const BreadcrumbsLink = styled.a`
    display: inline-block;
    color: #0083c3;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const BreadcrumbsSeperator = styled.span`
    margin-left: 5px;
    margin-right: 5px;
    font-weight: 700;
`;

export const Breadcrumbs = ({ breadcrumbsArray }) => {
    const crumbs = breadcrumbsArray.slice(0, breadcrumbsArray.length-1);
    const curr = breadcrumbsArray[breadcrumbsArray.length-1];
    return (
        <nav>
            <BreadcrumbsList>
                {crumbs.map((crumb, index) => (
                    <BreadcrumbsListItem key={index}>
                        <BreadcrumbsLink href={crumb.url}>
                            {crumb.text}
                        </BreadcrumbsLink>
                        <BreadcrumbsSeperator>
                            >
                        </BreadcrumbsSeperator>
                    </BreadcrumbsListItem>
                ))}
                <BreadcrumbsListItem>
                    <p>{curr.text}</p>
                </BreadcrumbsListItem>
            </BreadcrumbsList>
        </nav>
    );
};

Breadcrumbs.propTypes = {
    breadcrumbsArray: PropTypes.arrayOf(PropTypes.object).isRequired
};