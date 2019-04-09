import React, { Component } from 'react';

export const ShortlistContext = React.createContext({
    shortlist: [],
    hasBusiness: () => {},
    addBusiness: () => {},
    removeBusiness: () => {}
});

export class ShortlistContextProvider extends Component {
    state = {
        shortlist: []
    };

    /**
     * Returns true if a business with given id exists within the shortlist, else returns false.
     * @param {String} id - the id to test for.
     * @returns {Boolean} - whether the business was found or not.
     */
    hasBusiness = (businessId) => {
        const { shortlist } = this.state;
        return shortlist.findIndex((business) => business.id === businessId) !== -1;
    }

    /**
     * Adds a business to the shortlist.
     * @param {Object} businessObject - the business object to add to the shortlist.
     */
    addBusiness = (businessObject) => {
        this.setState(state => ({
            shortlist: [ ...state.shortlist, businessObject ]
        }));
    };

    removeBusiness = (businessId) => {
        this.setState(state => ({
            shortlist: state.shortlist.filter(business => business.id !== businessId)
        }));
    }

    removeAllBusinesses = () => {
        this.setState(state => ({
            shortlist: []
        }));
    }

    render() {
        const { children } = this.props;
        const { shortlist } = this.state;
        return (
            <ShortlistContext.Provider value={{
                shortlist,
                hasBusiness: this.hasBusiness,
                addBusiness: this.addBusiness,
                removeBusiness: this.removeBusiness,
                removeAllBusinesses: this.removeAllBusinesses
            }}>
                {children}
            </ShortlistContext.Provider>
        );
    }
}

export const ShortlistContextConsumer = ShortlistContext.Consumer;
