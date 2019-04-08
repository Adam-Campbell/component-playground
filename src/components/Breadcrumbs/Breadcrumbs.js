import React from 'react';
import PropTypes from 'prop-types';
import {
    BreadcrumbsList,
    BreadcrumbsListItem,
    BreadcrumbsLink,
    BreadcrumbsSeperator
} from './elements';

export const Breadcrumbs = ({ breadcrumbsArray }) => {
    const crumbs = breadcrumbsArray.slice(0, breadcrumbsArray.length-1);
    const curr = breadcrumbsArray[breadcrumbsArray.length-1];
    return (
        <nav>
            <BreadcrumbsList>
                {crumbs.map((crumb, index) => (
                    <BreadcrumbsListItem key={index}>
                        <BreadcrumbsLink to={crumb.url}>
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