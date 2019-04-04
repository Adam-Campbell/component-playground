import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../Header';
import YellLogo from '../../images/yell-logo.webp';
import GarageHero from '../../images/garage-hero.webp';
import { faAngleRight, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeroSection from '../HeroSection';
import PromoSection from './PromoSection';
import LinkListSection from '../LinkListSection';
import { popularServices, popularLocations } from '../../data';
import HomeSearchForm from '../HomeSearchForm';
import LoginLink from '../LoginLink';
import { Row } from '../LayoutElements';

const HeaderContentContainer = styled(Row)`
    display: flex;
    align-items: center;
`;

const YellLogoFull = styled.img`
  width: 120px;
  height: auto;
`;

const HeroTitle = styled.h1`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 2.25rem;
    color: #fff;
    margin-top: 100px;
    margin-bottom: 40px;
    span {
        color: #fedb00;
    }
`;

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
