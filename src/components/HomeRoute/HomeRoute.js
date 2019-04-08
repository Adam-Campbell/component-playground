import React from 'react';
import Header from '../Header';
import YellLogo from '../../images/yell-logo.webp';
import GarageHero from '../../images/garage-hero.webp';
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

export const HomeRoute = (props) => (
    <>
        <Header>
            <HeaderContentContainer>
                <YellLogoFull src={YellLogo} alt="The Yell logo" />
                <LoginLink pushRight />
            </HeaderContentContainer>
        </Header>
        <main>
            <HeroSection imageURL={GarageHero}>
            	<HeroTitle>
                	<span>Yell.com</span> The UKs leading online business directory
            	</HeroTitle>
				<HomeSearchForm />
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
