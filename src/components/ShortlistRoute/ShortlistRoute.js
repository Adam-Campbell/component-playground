import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    SplitLayoutContainer,
    SplitLayoutMain,
    SplitLayoutAside,
    SplitLayoutBody,
    Row
} from '../LayoutElements';
import ShortlistCount from '../ShortlistCount';
import Header from '../Header';
import SpriteSheet from '../SpriteSheet';
import LoginLink from '../LoginLink';
import SearchForm from '../ResultsSearchForm';
import SocialShareLink from '../SocialShareLink';
import BusinessCard from '../BusinessCard';
import { ShortlistContextConsumer } from '../ShortlistContext';


const Logo = styled(SpriteSheet)`
    width: 42px;
    height: 42px;
    background-position: 0 -365px;
    flex-shrink: 0;
`;

const HeaderContentContainer = styled(Row)`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

const Advert = styled.div`
    width: 100%;
    height: 320px;
    margin-top: 10px;
    margin-bottom: 10px;
    background: #fedb00;
`;

const IntroRow = styled(Row)`
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    align-items: center;
    border-bottom: solid 1px #aaa;
    margin-bottom: 20px;
`;

const Title = styled.h1`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 1.25rem;
    color: #222;
`;

const SocialShareLinksContainer = styled.div`
    display: flex;
    margin-left: auto;
`;

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
                        <SearchForm 
                            serviceFieldValue={service}
                            locationFieldValue={location}
                            handleServiceFieldUpdate={this.updateServiceField}
                            handleLocationFieldUpdate={this.updateLocationField}
                            handleFormSubmit={this.redirectURL}
                            isSelfControlled={false}
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

export const _ShortlistRoute = (props) => (
    <SplitLayoutBody>
        <Header>
            <HeaderContentContainer>
                <Logo />
                <SearchForm 
                    serviceFieldValue=""
                    locationFieldValue=""
                    handleServiceFieldUpdate={() => {}}
                    handleLocationFieldUpdate={() => {}}
                    handleFormSubmit={() => {}}
                    isSelfControlled={false}
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