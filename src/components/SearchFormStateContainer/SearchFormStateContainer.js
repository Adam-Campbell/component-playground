import { Component } from 'react';
import PropTypes from 'prop-types';
import { servicesAutoCompleteCache, locationsAutoCompleteCache } from '../../AutoCompleteCaches';

/*

This component manages the autocomplete suggestion functionality, active states and error states for the 
service and location fields of the forms that are used in multiple places throughout the site. This component
does not render anything by itself, instead it utilises the render prop pattern to allow a child component to
control exactly what gets rendered. 

It also does not manage the actual values of the fields, or what happens when the form is submitted, instead
relying on props passed down from the parent component to manage these things. This is done for additional
flexibility, making this component equally easy to use whether these two fields constitute the entire form
on the current page, or whether these fields only constitute part of a much larger form (such as the results
page).

The intended usage looks like this:

- Parent component renders this component, passing down as props the current field values, callback functions 
to update those values, and a callback function to handle form submission.

- This component accepts those props, performs logic to handle the autocomplete suggestions, manage active
states for each field and derive whether any of the fields are currently in an error state. All of this
new information, along with the props passed to this component, are then passed down to the render prop
child component.

- The child component receives all of these props, and is free to render and display the infomration however it 
needs to. The only contract it has with this component is that the various callback functions have to be attached 
to DOM elements so that they actually get called and the state can ultimately update.

*/

export class SearchFormStateContainer extends Component {

    static propTypes = {
        serviceFieldValue: PropTypes.string.isRequired,
        locationFieldValue: PropTypes.string.isRequired,
        handleServiceFieldUpdate: PropTypes.func.isRequired,
        handleLocationFieldUpdate: PropTypes.func.isRequired,
        handleFormSubmit: PropTypes.func.isRequired
    };

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

    /**
     * Gets autocomplete suggestion data for the current value in the service field and stores the data
     * in state.
     * @param {String} query - the current value of the service field. 
     */
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

    /**
     * Gets autocomplete suggestion data for the current value in the service field and stores the data
     * in state.
     * @param {String} query - the current value of the location field. 
     */
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

    /**
     * Updates the active status of the service field. 
     * @param {Boolean} isActive - whether or not the field should be in an active state.
     */
    updateServiceFieldActiveStatus = (isActive) => {
        this.setState({
            serviceFieldActive: isActive
        });
    };

    /**
     * Updates the active status of the location field. 
     * @param {Boolean} isActive - whether or not the field should be in an active state.
     */
    updateLocationFieldActiveStatus = (isActive) => {
        this.setState({
            locationFieldActive: isActive
        });
    };

    /**
     * Update the service field via the callback supplied by parent component, mark the field as unfresh if 
     * it isn't already, and fetch autocomplete suggestions for the new field value.
     * @param {String} value - the new value for the service field.
     */
    updateServiceField = (value) => {
        const { serviceFieldIsFresh } = this.state;
        this.props.handleServiceFieldUpdate(value);
        if (serviceFieldIsFresh) {
            this.setState({
                serviceFieldIsFresh: false
            });
        }
        this.updateServiceSuggestions(value);
    };

    /**
     * Update the location field via the callback supplied by parent component, mark the field as unfresh if 
     * it isn't already, and fetch autocomplete suggestions for the new field value.
     * @param {String} value - the new value for the location field.
     */
    updateLocationField = (value) => {
        const { locationFieldIsFresh } = this.state;
        this.props.handleLocationFieldUpdate(value);
        if (locationFieldIsFresh) {
            this.setState({
                locationFieldIsFresh: false
            });
        }
        this.updateLocationSuggestions(value);
    };

    /**
     * Prevent default to stop the browser from attempting to submit the form. Then, if both fields have a
     * value, call the handleFormSubmit callback supplied by parent component. Finally, if either of the 
     * form fields are still marked as fresh, ensure they are now marked as unfresh. 
     */
    handleFormSubmit = (e) => {
        e.preventDefault();
        const { 
            serviceFieldIsFresh, 
            locationFieldIsFresh
        } = this.state;
        const { 
            serviceFieldValue, 
            locationFieldValue 
        } = this.props;
        if (serviceFieldValue && locationFieldValue) {
            this.props.handleFormSubmit();
        }
        if (serviceFieldIsFresh || locationFieldIsFresh) {
            this.setState({
                serviceFieldIsFresh: false,
                locationFieldIsFresh: false
            });
        }
    }

    render() {
        const {
            serviceFieldValue,
            locationFieldValue, 
            children 
        } = this.props;
        const {
            serviceFieldActive, 
            serviceFieldSuggestions,
            serviceFieldIsFresh,
            locationFieldActive,
            locationFieldSuggestions,
            locationFieldIsFresh
        } = this.state;

        // A field is considered to have an error when it is empty (equal to an empty string), is not currently
        // in its active state and is no longer considered fresh (it has been altered at least once).
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
