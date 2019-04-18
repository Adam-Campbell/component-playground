import React, { Component } from 'react';
import { ResultsRoute } from './ResultsRoute';
import {
    locationData
} from '../ResultsFilter/resultsData';
import queryString from 'query-string';
import {
    constructDBRequestObject,
    constructBreadcumbData,
    mergeState
} from './utils';
import { ResultsContext } from '../ResultsContext';

export class ResultsRouteContainer extends Component {

    static contextType = ResultsContext;

    state = {
        showingFilters: false,
        service: this.props.currentSearchService || '',
        location: this.props.currentSearchLocation || '',
        category: null,
        contentrequirements: [],
        distance: null,
        locationrefinement: null,
        sortby: 'relevance',
        offset: 0
    }

    /**
     * Grabs the query string from the url and parses it to get the different filter parameters that should
     * be reflected in the UI, then makes a request for the data with the same filter settings. Only fires on
     * the initial load of this route, any further updates to the url params or query string whilst on this 
     * route are handled by componentDidUpdate.
     */
    componentDidMount() {
        if (this.props.location.search) {
            const parsedParams = queryString.parse(this.props.location.search);
            const filterState = mergeState(parsedParams);
            this.setState(state => ({
                ...filterState
            }), this.makeDBRequest);
        } else {
            this.makeDBRequest();
        }
        
    }

    /**
     * Checks to see if either the url params or query string have changed during the last update, and if so
     * updates the UI with the new information and makes the request for new data.
     */
    componentDidUpdate(prevProps) {
        if (
            prevProps.currentSearchService === this.props.currentSearchService &&
            prevProps.currentSearchLocation === this.props.currentSearchLocation &&
            prevProps.location.search === this.props.location.search
        ) {
            return;
        }
        let formState = {
            currentSearchService: this.props.currentSearchService,
            currentSearchLocation: this.props.currentSearchLocation
        };
        let filterState = mergeState(
            queryString.parse(this.props.location.search)
        );
        this.setState(state => ({
            ...formState,
            ...filterState
        }), this.makeDBRequest);
    }

    /**
     * Makes a call to the fake backend for new data, using the information from state to specify which data
     * to ask for.
     */
    makeDBRequest() {
        const {
            service,
            location,
            category,
            contentrequirements,
            sortby, 
            offset
        } = this.state;
        const req = constructDBRequestObject(service, location, category, contentrequirements, sortby, offset);
        this.context.makeRequest(req);
    }

    updateOffset = (newOffset) => {
        this.setState(state => ({
            offset: newOffset
        }), this.redirectURL)
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
        this.setState(state => ({
            category: newCategory
        }), this.redirectURL);
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
        this.setState(() => ({
            service: newValue    
        }));
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
     * Updates the criteria that results are currently sorted by.
     */
    updateSortCriteria = (newSortCriteria) => {
        this.setState({
            sortby: newSortCriteria
        }, this.redirectURL);
    };

    /**
     * Constructs a new url using the info in state to determine the correct url params and query string, 
     * then redirects to that URL via the browser history API.
     */
    redirectURL = () => {
        const {
            service,
            location,
            category,
            contentrequirements,
            distance,
            locationrefinement,
            sortby,
            offset
        } = this.state;
        let urlPath = `/results/${service}/${location}/`;
        let paramsArray = [];
        if (category !== null) {
            paramsArray.push(`category=${encodeURIComponent(category)}`);
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
        if (offset) {
            paramsArray.push(`offset=${offset}`);
        }
        if (paramsArray.length) {
            const searchString = `?${paramsArray.join('&')}`;
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
            sortby,
            offset
        } = this.state;
        const { currentSearchService, currentSearchLocation } = this.props;
        const updateDistanceFilter = this.updateLocationFilters('distance', 'locationrefinement');
        const updateLocationRefinement = this.updateLocationFilters('locationrefinement', 'distance');
        const breadcrumbsData = constructBreadcumbData(currentSearchLocation, currentSearchService);

        return <ResultsRoute 
            serviceFieldValue={service}
            locationFieldValue={location}
            updateServiceFormField={this.updateServiceFormField}
            updateLocationFormField={this.updateLocationFormField}
            breadcrumbsArray={breadcrumbsData}
            showingFilters={showingFilters}
            toggleFilters={this.toggleFilters}
            currentSearchService={currentSearchService}
            currentSearchLocation={currentSearchLocation}
            sortCriteria={sortby}
            updateSortCriteria={this.updateSortCriteria}
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
            offset={offset}
            updateOffset={this.updateOffset}
        />
    }
}
