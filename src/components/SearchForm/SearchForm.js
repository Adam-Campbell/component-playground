import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../Input';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { searchablePopularLocations, searchablePopularServices } from '../../data';
import {
    Form,
    Fieldset,
    FieldsContainer,
    SubmitButton
} from './elements';

export class SearchForm extends Component {
    state = {
        searchFieldValue: '',
        searchFieldHasChanged: false,
        locationFieldValue: '',
        locationFieldHasChanged: false
    };

    updateSearchField = (newValue) => {
        this.setState({
            searchFieldValue: newValue,
            searchFieldHasChanged: true
        });
    };

    updateLocationField = (newValue) => {
        this.setState({
            locationFieldValue: newValue,
            locationFieldHasChanged: true
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { searchFieldValue, locationFieldValue } = this.state;
        this.setState({
            searchFieldHasChanged: true,
            locationFieldHasChanged: true
        });
        if (searchFieldValue && locationFieldValue) {
            console.log(`You searched for ${searchFieldValue} in ${locationFieldValue}`);
            // this.props.history.push({
            //     pathname: '/results'
            // });
        }
    } 

    render() {
        const { 
            searchFieldValue, 
            searchFieldHasChanged,
            locationFieldValue,
            locationFieldHasChanged
        } = this.state;

        const searchFieldHasError = searchFieldValue === '' && searchFieldHasChanged;
        const locationFieldHasError = locationFieldValue === '' && locationFieldHasChanged;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Fieldset>
                    <FieldsContainer>
                        <Input 
                            inputType="text"
                            placeholder="Enter a search term"
                            dataType="services"
                            value={searchFieldValue}
                            updateValueCallback={this.updateSearchField}
                            icon={faSearch}
                            suggestionsData={searchablePopularServices}
                            hasEmptyError={searchFieldHasError}
                        />
                        <Input 
                            inputType="text"
                            placeholder="UK, town or postcode"
                            dataTypes="locations"
                            value={locationFieldValue}
                            updateValueCallback={this.updateLocationField}
                            icon={faSearch}
                            suggestionsData={searchablePopularLocations}
                            hasEmptyError={locationFieldHasError}
                        />
                        <SubmitButton type="submit">Search</SubmitButton>
                    </FieldsContainer>
                </Fieldset>
            </Form>
        );
    }
}