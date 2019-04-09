import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ShortlistContext } from '../ShortlistContext';
import {
    StyledShortlistButton,
    ShortlistButtonText,
    ShortlistButtonAction
} from './ShortlistButtonElements';

class ShortlistButton extends Component {

    static contextType = ShortlistContext;

    static propTypes = {
        businessId: PropTypes.string
    };

    render() {
        const { hasBusiness, addBusiness, removeBusiness } = this.context;
        const { businessId, businessObject } = this.props;
        const isShortlisted = hasBusiness(businessId);
        return (
            <StyledShortlistButton
                onClick={() => {
                    if (isShortlisted) {
                        removeBusiness(businessId);
                    } else {
                        addBusiness(businessObject);
                    }
                }}
            >
                <ShortlistButtonAction isShortlisted={isShortlisted}>
                    {isShortlisted ? '-' : '+'}
                </ShortlistButtonAction> 
                <ShortlistButtonText>
                    Shortlist
                </ShortlistButtonText>
            </StyledShortlistButton>
        );
    }
}

export default ShortlistButton;
