import React, { Component } from 'react';
import db from '../../DB';

export const ResultsContext = React.createContext({
    results: [],
    currentPage: null,
    totalPages: null,
    additionalCategories: [],
    isFetching: false,
    makeRequest: () => {}
});

export class ResultsContextProvider extends Component {

    state = {
        results: [],
        additionalCategories: [],
        isFetching: false,
        currentPage: null,
        totalPages: null
    };

    makeRequest = async (req) => {
        this.setState(state => ({
            isFetching: true
        }));
        try {
            console.log('makeRequest was called');
            const results = await db.getResults(req);
            console.log(results);
            this.setState(state => ({
                results: results.businesses,
                additionalCategories: this.getAdditionalCategories(results.businesses),
                currentPage: results.currentPage,
                totalPages: results.totalPages,
                isFetching: false
            }));
        } catch (err) {
            console.log(err);
        }
    }

    getAdditionalCategories = (resultsArr) => {
        const withDupes = resultsArr.reduce((acc, result) => ([...acc, ...result.services]), []);
        const deduped = [...new Set(withDupes)];
        const transformedToObjects = deduped.map(result => ({
            text: result.toLowerCase(),
            id: result.toLowerCase().replace(/ /g, '')
        }));
        return transformedToObjects;
    }

    render() {
        const { results, isFetching, currentPage, totalPages, additionalCategories } = this.state;
        const { children } = this.props;
        return (
            <ResultsContext.Provider value={{
                results,
                isFetching,
                currentPage,
                totalPages,
                additionalCategories,
                makeRequest: this.makeRequest
            }}>
                {children}
            </ResultsContext.Provider>
        );
    }
}

export const ResultsContextConsumer = ResultsContext.Consumer;