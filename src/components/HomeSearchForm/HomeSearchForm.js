import React from 'react';
import PropTypes from 'prop-types';
import SearchFormStateContainer from '../SearchFormStateContainer';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import {
    Form, 
    Fieldset,
    FieldsContainer, 
    SubmitButton,
} from './elements';

export const HomeSearchForm = (props) => (
    <SearchFormStateContainer
        serviceFieldValue={props.serviceFieldValue}
        locationFieldValue={props.locationFieldValue}
        isSelfControlled={true}
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
                            placeholder="Enter a search term"
                            value={serviceFieldValue}
                            handleChange={updateServiceField}
                            updateActiveState={updateServiceFieldActiveStatus}
                            suggestions={serviceFieldSuggestions}
                            isActive={serviceFieldActive}
                            hasError={serviceFieldHasError}
                        />
                        <Input 
                            icon={faMapMarkerAlt}
                            placeholder="UK, town or postcode"
                            value={locationFieldValue}
                            handleChange={updateLocationField}
                            updateActiveState={updateLocationFieldActiveStatus}
                            suggestions={locationFieldSuggestions}
                            isActive={locationFieldActive}
                            hasError={locationFieldHasError}
                        />
                        <SubmitButton type="submit">Search</SubmitButton>
                    </FieldsContainer>
                </Fieldset>
            </Form>
        )}
    </SearchFormStateContainer>
);

HomeSearchForm.propTypes = {
    serviceFieldValue: PropTypes.string,
    locationFieldValue: PropTypes.string
};
