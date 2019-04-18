import React, { Component } from 'react';
import { ShortlistContext } from '../ShortlistContext';
import ShortlistSummaryItem from './ShortlistSummaryItem'; 
import { faMapMarkedAlt, faList } from '@fortawesome/free-solid-svg-icons';
import {
    StyledShortlistSummary,
    ShortlistTopRow,
    ShortlistTitle,
    RemoveAllButton,
    ShortlistBusinessList,
    ShortlistBottomRow,
    ShortlistLink,
    ShortlistLinkIcon,
    ShortlistDescriptionText
} from './elements';

export class ShortlistSummary extends Component {

    static contextType = ShortlistContext;

    renderItems = (shortlist, removeBusinessFunc) => {
        return shortlist.map((business) => (
            <ShortlistSummaryItem 
                key={business.id}
                id={business.id}
                name={business.name}
                telephoneNumber={business.telephoneNumber}
                address={`${business.location.city} ${business.location.postcode}`}
                handleRemove={() => removeBusinessFunc(business.id)}
            /> 
        ))
    }

    render() {
        const { shortlist, removeBusiness, removeAllBusinesses } = this.context;
        const hasItems = shortlist.length > 0;
        return (
            <StyledShortlistSummary>
                <ShortlistTopRow>
                    <ShortlistTitle>Shortlist</ShortlistTitle>
                    {hasItems && <RemoveAllButton
                                    onClick={removeAllBusinesses}
                                >Remove all</RemoveAllButton>
                    }
                </ShortlistTopRow>
                {hasItems ? (
                    <>
                        <ShortlistBusinessList>
                            {this.renderItems(shortlist, removeBusiness)}
                        </ShortlistBusinessList>
                        <ShortlistBottomRow>
                            <ShortlistLink href="/">
                                <ShortlistLinkIcon icon={faList} />
                                Full Details
                            </ShortlistLink>
                            <ShortlistLink href="/">
                                <ShortlistLinkIcon icon={faMapMarkedAlt} />
                                Map View
                            </ShortlistLink>
                        </ShortlistBottomRow>
                    </> 
                ) : (
                    <ShortlistDescriptionText>
                        Save up to ten businesses to your shortlist by clicking the 'Shortlist' link on each listing.
                    </ShortlistDescriptionText>
                )} 
            </StyledShortlistSummary>
        );
    }
}

