import React, { Component } from 'react';
import {
    SplitLayoutContainer,
    SplitLayoutMain,
    SplitLayoutAside,
    SplitLayoutBody
} from '../LayoutElements';
import {
    Logo,
    HeaderContentContainer,
    Advert, 
    IntroRow,
    Title, 
    SocialShareLinksContainer
} from './elements';
import ShortlistCount from '../ShortlistCount';
import Header from '../Header';
import LoginLink from '../LoginLink';
import HeaderSearchForm from '../HeaderSearchForm';
import SocialShareLink from '../SocialShareLink';
import BusinessCard from '../BusinessCard';
import { ShortlistContextConsumer } from '../ShortlistContext';

export class ShortlistRoute extends Component {

    state = {
        service: '',
        location: ''
    };

    updateServiceField = (value) => {
        this.setState(state => ({
            service: value
        }));
    }

    updateLocationField = (value) => {
        this.setState(state => ({
            location: value
        }));
    }

    redirectURL = () => {
        const { service, location } = this.state;
        this.props.history.push({
            pathname: `/results/${service}/${location}/`
        })
    }

    render() {
        const { service, location } = this.state;
        return (
            <SplitLayoutBody>
                <Header>
                    <HeaderContentContainer>
                        <Logo />
                        <HeaderSearchForm 
                            serviceFieldValue={service}
                            locationFieldValue={location}
                            handleServiceFieldUpdate={this.updateServiceField}
                            handleLocationFieldUpdate={this.updateLocationField}
                            handleFormSubmit={this.redirectURL}
                        />
                        <ShortlistCount />
                        <LoginLink />
                    </HeaderContentContainer>
                </Header>
                <IntroRow>
                    <Title>Shortlist</Title>
                    <SocialShareLinksContainer>
                        <SocialShareLink platform="facebook" />
                        <SocialShareLink platform="twitter" />
                    </SocialShareLinksContainer>
                </IntroRow>
                <SplitLayoutContainer>
                    <SplitLayoutAside>
                        <Advert />
                        <Advert />
                    </SplitLayoutAside>
                    <SplitLayoutMain>
                        <ShortlistContextConsumer>
                            {({ shortlist }) => (
                                shortlist.map(business => (
                                    <BusinessCard business={business} key={business.id} />
                                ))
                            )}
                        </ShortlistContextConsumer>
                    </SplitLayoutMain>
                </SplitLayoutContainer>
            </SplitLayoutBody>
        );
    }
}
