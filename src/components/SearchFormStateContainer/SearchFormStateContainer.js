import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { servicesWithCache, locationsWithCache } from '../../utils';
import { servicesAutoCompleteCache, locationsAutoCompleteCache } from '../../AutoCompleteCaches';
import { withRouter } from 'react-router-dom';


/*
___________________________________________________________
 About the isSelfControlled prop and associated behaviours
___________________________________________________________

Depending on whether the isSelfControlled prop is true or false, this component will either completely
control itself (when the prop is true), or will delegate control to its parent component (when the prop is 
false). 

When it delegates control to its parent, it must receive the fields values as props, as well as onChange
handles for each field and an onSubmit handler for the form. 

These two behaviours allow the component to be used both in contexts where it is the complete 'form' on that
page, such as the home page, as well as in contexts where it is only part of a larger form, such as the results
page.

Note that in its current implementation everything still has to pass through the local component state even when
the component is controlled by its parent, so the flow is:

parents state => passed down as props => this components state => passed to input element

This is not optimal, but it is unlikely to have any tangible performance impact. However, it would be good to
come up with a better way to deal with this. 

*/


export class SearchFormStateContainer extends Component {

    static propTypes = {
        serviceFieldValue: PropTypes.string,
        locationFieldValue: PropTypes.string,
        handleServiceFieldUpdate: PropTypes.func,
        handleLocationFieldUpdate: PropTypes.func,
        handleFormSubmit: PropTypes.func,
        isSelfControlled: PropTypes.bool
    };

    static defaultProps = {
        serviceFieldValue: '',
        locationFieldValue: '',
        isSelfControlled: false
    }

    state = {
        serviceFieldValue: this.props.serviceFieldValue,
        serviceFieldActive: false,
        serviceFieldSuggestions: [],
        serviceFieldIsFresh: true,
        locationFieldValue: this.props.locationFieldValue,
        locationFieldActive: false,
        locationFieldSuggestions:[],
        locationFieldIsFresh: true
    };

    servicesAutoCompleteCache = servicesAutoCompleteCache;
    locationsAutoCompleteCache = locationsAutoCompleteCache;

    componentDidUpdate(prevProps) {
        if (
            prevProps.serviceFieldValue !== this.props.serviceFieldValue ||
            prevProps.locationFieldValue !== this.props.locationFieldValue
        ) {
            this.setState({
                serviceFieldValue: this.props.serviceFieldValue,
                locationFieldValue: this.props.locationFieldValue
            });
        }
    }

    updateServiceSuggestions = async (query) => {
        let newSuggestions = [];
        if (query !== '') {
            const lowerQuery = query.toLowerCase();
            newSuggestions = await this.servicesAutoCompleteCache.getResults(lowerQuery);
        }
        this.setState({
            serviceFieldSuggestions: newSuggestions
        });
    };

    updateLocationSuggestions = async (query) => {
        let newSuggestions = [];
        if (query !== '') {
            const lowerQuery = query.toLowerCase();
            newSuggestions = await this.locationsAutoCompleteCache.getResults(lowerQuery);
        }
        this.setState({
            locationFieldSuggestions: newSuggestions
        });
    };

    updateServiceFieldActiveStatus = (isActive) => {
        this.setState({
            serviceFieldActive: isActive
        });
    };

    updateLocationFieldActiveStatus = (isActive) => {
        this.setState({
            locationFieldActive: isActive
        });
    };

    updateServiceField = (value) => {
        console.log('initial call: ', Date.now());
        if (this.props.isSelfControlled) {
            this.setState({
                serviceFieldValue: value,
                serviceFieldIsFresh: false
            });
        } else {
            this.props.handleServiceFieldUpdate(value);
            this.setState({
                serviceFieldIsFresh: false
            });
        }
        this.updateServiceSuggestions(value);
    };

    updateLocationField = (value) => {
        if (this.props.isSelfControlled) {
            this.setState({
                locationFieldValue: value,
                locationFieldIsFresh: false
            });
        } else {
            this.props.handleLocationFieldUpdate(value);
            this.setState({
                locationFieldIsFresh: false
            });
        }
        this.updateLocationSuggestions(value);
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        const { 
            serviceFieldIsFresh, 
            locationFieldIsFresh,
            serviceFieldValue,
            locationFieldValue 
        } = this.state;
        if (serviceFieldValue && locationFieldValue) {
            console.log(this.props.isSelfControlled);
            if (this.props.isSelfControlled) {
                this.props.history.push({
                    pathname: `/results/${serviceFieldValue}/${locationFieldValue}`
                });
            } else {
                this.props.handleFormSubmit();
            }
        }
        if (serviceFieldIsFresh || locationFieldIsFresh) {
            this.setState({
                serviceFieldIsFresh: false,
                locationFieldIsFresh: false
            });
        }
    }

    render() {
        const { children } = this.props;
        const {
            serviceFieldValue,
            serviceFieldActive, 
            serviceFieldSuggestions,
            serviceFieldIsFresh,
            locationFieldValue,
            locationFieldActive,
            locationFieldSuggestions,
            locationFieldIsFresh
        } = this.state;

        const serviceFieldHasError = serviceFieldValue === '' && !serviceFieldActive && !serviceFieldIsFresh;
        const locationFieldHasError = locationFieldValue === '' && !locationFieldActive && !locationFieldIsFresh;

        return children({
            serviceFieldValue,
            serviceFieldActive,
            serviceFieldSuggestions,
            serviceFieldHasError,
            locationFieldValue,
            locationFieldActive,
            locationFieldSuggestions,
            locationFieldHasError,
            updateServiceFieldActiveStatus: this.updateServiceFieldActiveStatus,
            updateLocationFieldActiveStatus: this.updateLocationFieldActiveStatus,
            updateServiceField: this.updateServiceField,
            updateLocationField: this.updateLocationField,
            handleFormSubmit: this.handleFormSubmit
        });
    }
}
