import React from 'react';
import PropTypes from 'prop-types';
import SearchFormStateContainer from '../SearchFormStateContainer';
import Input from './Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {
    Form,
    Fieldset,
    FieldsContainer,
    SubmitButton
} from './elements';

export const ResultsSearchForm = (props) => (
    <SearchFormStateContainer
        serviceFieldValue={props.serviceFieldValue}
        locationFieldValue={props.locationFieldValue}
        isSelfControlled={props.isSelfControlled}
        handleServiceFieldUpdate={props.handleServiceFieldUpdate}
        handleLocationFieldUpdate={props.handleLocationFieldUpdate}
        handleFormSubmit={props.handleFormSubmit}
    >
        {({
            serviceFieldValue,
            serviceFieldActive,
            serviceFieldSuggestions,
            serviceFieldHasError,
            locationFieldValue,
            locationFieldActive,
            locationFieldSuggestions,
            locationFieldHasError,
            updateServiceFieldActiveStatus,
            updateLocationFieldActiveStatus,
            updateServiceField,
            updateLocationField,
            handleFormSubmit
        }) => (
            <Form onSubmit={handleFormSubmit}>
                <Fieldset>
                    <FieldsContainer>
                        <Input
                            icon={faSearch} 
                            value={serviceFieldValue}
                            placeholder="Enter a search term"
                            handleChange={updateServiceField}
                            updateActiveState={updateServiceFieldActiveStatus}
                            suggestions={serviceFieldSuggestions}
                            isActive={serviceFieldActive}
                            hasError={serviceFieldHasError}
                        />
                        <Input 
                            icon={faMapMarkerAlt}
                            value={locationFieldValue}
                            placeholder="UK, town or postcode"
                            handleChange={updateLocationField}
                            updateActiveState={updateLocationFieldActiveStatus}
                            suggestions={locationFieldSuggestions}
                            isActive={locationFieldActive}
                            hasError={locationFieldHasError}
                        />
                        <SubmitButton>
                            <FontAwesomeIcon icon={faSearch} />
                            <span>Search</span>
                        </SubmitButton>
                    </FieldsContainer>
                </Fieldset>
            </Form>
        )}
    </SearchFormStateContainer>
);

ResultsSearchForm.propTypes = {
    serviceFieldValue: PropTypes.string,
    locationFieldValue: PropTypes.string,
    isSelfControlled: PropTypes.bool,
    handleServiceFieldUpdate: PropTypes.func,
    handleLocationFieldUpdate: PropTypes.func,
    handleFormSubmit: PropTypes.func
};

