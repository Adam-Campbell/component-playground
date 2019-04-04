import React from 'react';
import PropTypes from 'prop-types';
import { 
    SuggestionsList,
    SuggestionItem
} from './elements';

const Suggestions = ({ suggestionsArray, placeholder, handleChange }) => (
    suggestionsArray.length === 0 ? (
        <SuggestionsList>
            <SuggestionItem isPlaceholder>
                {placeholder}
            </SuggestionItem>
        </SuggestionsList>
    ) : (
        <SuggestionsList>
            {suggestionsArray.slice(0,5).map((suggestion, index) => (
                <SuggestionItem
                    key={index}
                    onMouseDown={(e) => {
                        e.preventDefault();
                        handleChange(suggestion);
                    }}
                >
                    {suggestion}
                </SuggestionItem>
            ))}
        </SuggestionsList>
    )
);

Suggestions.propTypes = {
    suggestionsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
    placeholder: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default Suggestions;