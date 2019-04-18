import React, { Component } from 'react';
import { ShortlistContext } from '../ShortlistContext';
import {
    ShortlistCountContainer,
    ShortlistCountLink,
    ShortlistNumber
} from './elements';

export class ShortlistCount extends Component {
    
    static contextType = ShortlistContext;

    render() {
        const { shortlist } = this.context;
        const shortlistCount = shortlist.length;
        return shortlistCount > 0 ? (
            <ShortlistCountContainer>
                <ShortlistCountLink to="/shortlist">
                    <p>Shortlist</p>
                    <ShortlistNumber>{shortlistCount}</ShortlistNumber>
                </ShortlistCountLink>
            </ShortlistCountContainer>
        ) : (
            <ShortlistCountContainer>
                <p>Shortlist (0)</p>
            </ShortlistCountContainer>
        )
    }
}
