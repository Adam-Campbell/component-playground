import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ResultsContext } from '../ResultsContext';
import Loader from '../Loader';
import BusinessCard from '../BusinessCard';
import PaginationControls from '../PaginationControls';

class ResultsCollection extends PureComponent {

    static contextType = ResultsContext;

    render() {
        console.log('ResultsCollection component has rerendered');
        const { isFetching, results } = this.context;
        const { offset, updateOffset } = this.props;
        return isFetching ? (
            <Loader />
        ) : (
            <>
                {results.map(business => (
                    <BusinessCard business={business} key={business.id} />
                ))}
                <PaginationControls offset={offset} updateOffset={updateOffset} />
            </>
        )
        
    }
}

export default ResultsCollection;