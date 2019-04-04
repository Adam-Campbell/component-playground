import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import Suggestions from './Suggestions';
import {
    InputContainer,
    InputRow,
    IconContainer,
    InputElement,
    ClearFieldIconContainer,
    WarningContainer,
    WarningText
} from './elements';

const Input = ({icon, value, placeholder, handleChange, updateActiveState, suggestions, isActive, hasError}) => (
    <InputContainer>
        <InputRow isActive={isActive} hasError={hasError}>
            <IconContainer isActive={isActive}>
                <FontAwesomeIcon icon={icon} />
            </IconContainer>
            <InputElement 
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                onFocus={() => updateActiveState(true)}
                onBlur={() => updateActiveState(false)}
            />
            <ClearFieldIconContainer>
                <FontAwesomeIcon 
                    icon={faTimes}
                    onMouseDown={(e) => {
                        e.preventDefault();
                        handleChange('');
                    }} 
                />
            </ClearFieldIconContainer>
        </InputRow>
        {isActive && (
            <Suggestions 
                suggestionsArray={suggestions}
                placeholder={placeholder}
                handleChange={handleChange}
            />
        )}
        {hasError && (
            <WarningContainer>
                <FontAwesomeIcon icon={faExclamationCircle} />
                <WarningText>
                    This field is required
                </WarningText>
            </WarningContainer>
        )}
    </InputContainer>
);

Input.propTypes = {
    icon: PropTypes.any,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    updateActiveState: PropTypes.func.isRequired,
    suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
    isActive: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired
};

Input.defaultProps = {
    icon: faSearch
};

export default Input;