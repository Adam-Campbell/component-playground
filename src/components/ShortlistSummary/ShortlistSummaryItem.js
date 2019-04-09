import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
    StyledShortlistSummaryItem,
    SummaryItemLink,
    SummaryItemText,
    RemoveBusinessButton
} from './elements';

const ShortlistSummaryItem = (props) => (
    <StyledShortlistSummaryItem>
        <RemoveBusinessButton 
            onClick={props.handleRemove}
        >
            <FontAwesomeIcon icon={faTimes} />
        </RemoveBusinessButton>
        <SummaryItemLink href="/">{props.name}</SummaryItemLink>
        <SummaryItemText>
            <strong>Tel:</strong>
            {props.telephoneNumber}
        </SummaryItemText>
        <SummaryItemText>{props.address}</SummaryItemText>
    </StyledShortlistSummaryItem>
);

ShortlistSummaryItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    telephoneNumber: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    handleRemove: PropTypes.func.isRequired
};

export default ShortlistSummaryItem;