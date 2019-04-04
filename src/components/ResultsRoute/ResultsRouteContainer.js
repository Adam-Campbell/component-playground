import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ResultsRoute } from './ResultsRoute';
import {
    categoryData,
    locationData
} from '../ResultsFilter/resultsData';
import queryString from 'query-string';


const formatString = (str) => str.replace(/_/g, ' ');

/*

TODO

In componentDidMount...
- Grab all of the relevant state information from the url params (/results/:service/:location/) and
from any query params that have been added to the url. Update the pages state accordingly.

In componentDidUpdate
Check if any of the data in the url has changed from prev props to current props. Everything that needs to 
be checked (the url params and the query string) are just string values, so can just be checked with the strict
equality operator. However if the query string has changed it will need to be parsed to obtain the actual values.
If anything has changed between the url params and query string from prev props vs current props, then update
component state accordingly. 


This will require a review of naming conventions used for different things in the app, I need to make sure it
all matches up for this to work nicely.

- Check that the form is actually working correctly and preventing you from 
submitting if you don't have both a service and a location. 


*/

const defaultFilterState = {
    category: null,
    contentrequirements: [],
    distance: null,
    locationrefinement: null,
    sortby: 'relevance'
};

const mergeState = (newState) => ({
    ...defaultFilterState,
    ...newState,
    contentrequirements: newState.contentrequirements && newState.contentrequirements.length ?
                         newState.contentrequirements.split(',') :
                         []
});

const breadcrumbsData = [
    {
        url: 'http://localhost:3000/',
        text: 'Home'
    },
    {
        url: 'http://localhost:3000/results/glasgow',
        text: 'Glasgow'
    },
    {
        url: 'http://localhost:3000/results/glasgow/cafes',
        text: 'Cafes & Coffee Shops'
    }
];

export class ResultsRouteContainer extends Component {

    state = {
        showingFilters: false,
        service: this.props.currentSearchService || '',
        location: this.props.currentSearchLocation || '',
        category: null,
        contentrequirements: [],
        distance: null,
        locationrefinement: null,
        sortby: 'relevance'
    }

    componentDidMount() {
        if (this.props.location.search) {
            const parsedParams = queryString.parse(this.props.location.search);
            const filterState = mergeState(parsedParams);
            this.setState({
                ...filterState
            });
            //console.log(parsedParams);
        }
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.currentSearchService === this.props.currentSearchService &&
            prevProps.currentSearchLocation === this.props.currentSearchLocation &&
            prevProps.location.search === this.props.location.search
        ) {
            console.log('nothing changed');
            return;
        }
        console.log('something has changed');
        let formState = {
            currentSearchService: this.props.currentSearchService,
            currentSearchLocation: this.props.currentSearchLocation
        };
        let filterState = mergeState(
            queryString.parse(this.props.location.search)
        );
        this.setState({
            ...formState,
            ...filterState
        });
    }

    /**
     * Toggles between the filter panel being shown or hidden at smaller viewport widths.
     */
    toggleFilters = () => {
        this.setState(state => ({
            showingFilters: !state.showingFilters
        }));
    }

    /**
     * Updates the selected category field in state (radio button behaviour).
     */
    updateSelectedCategory = (newCategory) => {
        this.setState({
            category: newCategory
        }, this.redirectURL);
    };

    /**
     * Updates the selectedContentRequirements field in state (checkbox behaviour).
     */
    updateContentRequirements = (item, isSelected) => {
        if (isSelected) {
            this.setState(state => ({
                contentrequirements: [
                    ...state.contentrequirements,
                    item
                ]
            }), this.redirectURL);
        } else {
            this.setState(state => ({
                contentrequirements: state.contentrequirements.filter(el => el !== item)
            }), this.redirectURL);
        }
    }

    /**
     * Updates the location filter fields in state - distanceFilter and locationRefinement. Because these two
     * fields are mutually exclusive, updating the value in one of those fields results in the other field being
     * reset to null. Note that this function is curried, so before it can be used it must be called once with
     * values for filterName and otherFilter to create a closure with those specific values. 
     */
    updateLocationFilters = (filterName, otherFilter) => (item) => {
        this.setState({
            [filterName]: item,
            [otherFilter]: null
        }, this.redirectURL);
    };

    /**
     * Updates the service field in the form at the top of the page.
     */
    updateServiceFormField = (newValue) => {
        this.setState({
            service: newValue    
        });
    };

    /**
     * Updates the location field in the form at the top of the page.
     */
    updateLocationFormField = (newValue) => {
        this.setState({
            location: newValue
        });
    };

    /**
     * 
     */
    handleFormSubmit = () => {
        const { service, location } = this.state;
        this.props.history.push({
            pathname: `/results/${service}/${location}`
        });
    }

    /**
     * Updates the criteria that results are currently sorted by.
     */
    updateSortCriteria = (newSortCriteria) => {
        this.setState({
            sortby: newSortCriteria
        }, this.redirectURL);
    };

    logCurrentCriteria = () => {
        const {
            service,
            location,
            selectedCategory,
            selectedContentRequirements,
            distanceFilter,
            locationRefinement,
            sortBy
        } = this.state;
        console.log(`
        Current state of form:

        Service: ${service}
        Location: ${location}
        Selected category: ${selectedCategory}
        Selected content requirements: ${selectedContentRequirements}
        Distance filter: ${distanceFilter}
        Location Refinement: ${locationRefinement}
        Sorted by: ${sortBy}
        `);
    }

    redirectURL = () => {
        const {
            service,
            location,
            category,
            contentrequirements,
            distance,
            locationrefinement,
            sortby
        } = this.state;
        let urlPath = `/results/${service}/${location}/`;
        let paramsArray = [];
        if (category !== null) {
            paramsArray.push(`category=${category}`);
        }
        if (contentrequirements.length) {
            paramsArray.push(`contentrequirements=${contentrequirements.join(',')}`);
        }
        if (distance !== null) {
            paramsArray.push(`distance=${distance}`);
        }
        if (locationrefinement !== null) {
            paramsArray.push(`locationrefinement=${locationrefinement}`);
        }
        if (sortby !== 'relevance') {
            paramsArray.push(`sortby=${sortby}`);
        }
        if (paramsArray.length) {
            const searchString = `?${paramsArray.join('&')}`;
            //console.log(searchString);
            this.props.history.push({
                pathname: urlPath,
                search: searchString
            });
        } else {
            this.props.history.push({
                pathname: urlPath
            });
        }
    }

    render() {
        const { 
            showingFilters, 
            service, 
            location,
            category,
            contentrequirements,
            distance,
            locationrefinement,
            sortby
        } = this.state;
        const { currentSearchService, currentSearchLocation } = this.props;

        const updateDistanceFilter = this.updateLocationFilters('distance', 'locationrefinement');
        const updateLocationRefinement = this.updateLocationFilters('locationrefinement', 'distance');

        return <ResultsRoute 
            serviceFieldValue={service}
            locationFieldValue={location}
            updateServiceFormField={this.updateServiceFormField}
            updateLocationFormField={this.updateLocationFormField}
            handleFormSubmit={this.handleFormSubmit}
            breadcrumbsArray={breadcrumbsData}
            showingFilters={showingFilters}
            toggleFilters={this.toggleFilters}
            currentSearchService={currentSearchService}
            currentSearchLocation={currentSearchLocation}
            sortCriteria={sortby}
            updateSortCriteria={this.updateSortCriteria}
            categoryData={categoryData}
            locationData={locationData}
            selectedCategory={category}
            selectedContentRequirements={contentrequirements}
            distanceFilter={distance}
            locationRefinement={locationrefinement}
            updateSelectedCategory={this.updateSelectedCategory}
            updateContentRequirements={this.updateContentRequirements}
            updateDistanceFilter={updateDistanceFilter}
            updateLocationRefinement={updateLocationRefinement}
            redirectURL={this.redirectURL}
        />
    }
}
