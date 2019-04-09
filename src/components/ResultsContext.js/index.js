import React, { Component } from 'react';
import db from '../../DB';

export const ResultsContext = React.createContext({
    results: [],
    isFetching: false,
    makeRequest: () => {}
});

export class ResultsContextProvider extends Component {

    state = {
        results: [],
        isFetching: false
    };

    makeRequest = async (req) => {
        this.setState(state => ({
            isFetching: true
        }));
        try {
            const results = await db.getResults(req);
            this.setState(state => ({
                results: results.businesses,
                isFetching: false
            }));
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const { results, isFetching } = this.state;
        const { children } = this.props;
        return (
            <ResultsContext.Provider value={{
                results,
                isFetching,
                makeRequest: this.makeRequest
            }}>
                {children}
            </ResultsContext.Provider>
        );
    }
}

export const ResultsContextConsumer = ResultsContext.Consumer;