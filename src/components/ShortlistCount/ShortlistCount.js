import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ShortlistContext } from '../ShortlistContext';
import {
    StyledShortlistCount,
    StyledShortlistCountWithItems,
    ShortlistNumber
} from './elements';

export class ShortlistCount extends Component {
    
    static contextType = ShortlistContext;

    render() {
        const { shortlist } = this.context;
        const shortlistCount = shortlist.length;
        return shortlistCount > 0 ? (
            <StyledShortlistCountWithItems to="/shortlist">
                Shortlist
                <ShortlistNumber>{shortlistCount}</ShortlistNumber>
            </StyledShortlistCountWithItems>
        ) : (
            <StyledShortlistCount to="/shortlist">
                Shortlist (0)
            </StyledShortlistCount>
        )
    }
}
