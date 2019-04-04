import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import Suggestions from './Suggestions';
import {
    Container, 
    InputRow,
    IconContainer,
    InputElement,
    ClearFieldIconContainer,
    WarningContainer,
    WarningText
} from './elements';
import { servicesWithCache, locationsWithCache } from '../../utils';


export class Input extends Component {

    constructor(props) {
        super(props);
        this.cache = this.props.dataType === 'services' ? servicesWithCache : locationsWithCache;
        this.state = {
            isActive: false,
            suggestions: []
        };
    }

    static propTypes = {
        inputType: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        updateValueCallback: PropTypes.func.isRequired,
        suggestionsData: PropTypes.arrayOf(PropTypes.string).isRequired,
        hasEmptyError: PropTypes.bool.isRequired,
        icon: PropTypes.any
    };

    static defaultProps = {
        icon: faSearch
    };

    enterActiveState = () => {
        this.setState({
            isActive: true
        });
    }

    exitActiveState = () => {
        this.setState({
            isActive: false
        });
    }

    updateSuggestions = async (searchString) => {
        let newSuggestions = [];
        if (searchString !== '') {
            const lowerSearch = searchString.toLowerCase();
            newSuggestions = await this.cache.getResults(lowerSearch);
        }
        this.setState({
            suggestions: newSuggestions
        });
    }

    handleChange = (newValue) => {
        this.props.updateValueCallback(newValue);
        this.updateSuggestions(newValue);
    }

    render() {
        const { isActive, suggestions } = this.state;
        const { inputType, placeholder, value, icon, hasEmptyError } = this.props;
        const showErrorState = hasEmptyError && !isActive;
        return (
            <Container>
                <InputRow isActive={isActive} hasError={showErrorState}>
                    <IconContainer isActive={isActive}>
                        <FontAwesomeIcon icon={icon} />
                    </IconContainer>
                    <InputElement 
                        type={inputType}
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => this.handleChange(e.target.value)}
                        onFocus={this.enterActiveState}
                        onBlur={this.exitActiveState}
                    />
                    <ClearFieldIconContainer>
                        <FontAwesomeIcon 
                            icon={faTimes}
                            onMouseDown={(e) => {
                                e.preventDefault();
                                this.handleChange('');
                            }} 
                        />
                    </ClearFieldIconContainer>
                </InputRow>
                {isActive && (
                    <Suggestions 
                        suggestionsArray={suggestions}
                        placeholder={placeholder}
                        handleChange={this.handleChange}
                    />
                )}
                {showErrorState && (
                    <WarningContainer>
                        <FontAwesomeIcon icon={faExclamationCircle} />
                        <WarningText>
                            This field is required
                        </WarningText>
                    </WarningContainer>
                )}
            </Container>
        )
    }
}
