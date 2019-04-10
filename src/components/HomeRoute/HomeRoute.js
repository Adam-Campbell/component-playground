import React, { Component } from 'react';
import Header from '../Header';
import YellLogo from '../../images/yell-logo.webp';
import HeroSection from '../HeroSection';
import PromoSection from './PromoSection';
import LinkListSection from '../LinkListSection';
import { popularServices, popularLocations } from '../../data';
import HomeSearchForm from '../HomeSearchForm';
import LoginLink from '../LoginLink';
import {
    HeaderContentContainer,
    YellLogoFull,
    HeroTitle
} from './HomeRouteElements';
import HeroOne from '../../images/hero-one-min.jpg';
import HeroTwo from '../../images/hero-two-min.jpg';
import HeroThree from '../../images/hero-three-min.jpg';
import HeroFour from '../../images/hero-four-min.jpg';
import HeroFive from '../../images/hero-five-min.jpg';
import HeroSix from '../../images/hero-six-min.jpg';
import HeroSeven from '../../images/hero-seven-min.jpg';

const heroImagesArr = [
    HeroOne,
    HeroTwo,
    HeroThree,
    HeroFour,
    HeroFive,
    HeroSix,
    HeroSeven
];

const getHeroImage = () => {
    const randomIndex = Math.floor(Math.random() * heroImagesArr.length);
    return heroImagesArr[randomIndex];
};

export class HomeRoute extends Component {

    state = {
        serviceFieldValue: '',
        locationFieldValue: ''
    };

    heroImage = getHeroImage();

    updateServiceField = (newValue) => {
        this.setState(state => ({
            serviceFieldValue: newValue
        }));
    }

    updateLocationField = (newValue) => {
        this.setState(state => ({
            locationFieldValue: newValue
        }));
    }

    redirectURL = () => {
        const {
            serviceFieldValue,
            locationFieldValue
        } = this.state;
        this.props.history.push({
            pathname: `/results/${serviceFieldValue}/${locationFieldValue}/`
        });
    }

    

    render() {
        const {
            serviceFieldValue,
            locationFieldValue
        } = this.state;
        return (
            <>
                <Header>
                    <HeaderContentContainer>
                        <YellLogoFull src={YellLogo} alt="The Yell logo" />
                        <LoginLink pushRight />
                    </HeaderContentContainer>
                </Header>
                <main>
                    <HeroSection imageURL={this.heroImage}>
                        <HeroTitle>
                            <span>Yell.com</span> The UKs leading online business directory
                        </HeroTitle>
                        <HomeSearchForm 
                            serviceFieldValue={serviceFieldValue}
                            locationFieldValue={locationFieldValue}
                            handleServiceFieldUpdate={this.updateServiceField}
                            handleLocationFieldUpdate={this.updateLocationField}
                            handleFormSubmit={this.redirectURL}
                        />
                    </HeroSection>
                    <PromoSection />
                    <LinkListSection 
                        title="Popular Services"
                        items={popularServices}
                    />
                    <LinkListSection
                        title="Popular Locations"
                        items={popularLocations}
                    />
                </main>
            </>
        );
    }
}