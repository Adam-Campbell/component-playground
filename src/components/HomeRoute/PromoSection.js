import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import YellPattern from '../../images/yell-pattern.png';
import YellFingers from '../../images/yell-fingers-bg.png';
import PhoneInHand from '../../images/phone-in-hand.png';
import { faAngleRight, faUserCircle, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SpriteSheet from '../SpriteSheet';
import { Row } from '../LayoutElements';

const StyledPromoSection = styled.section`
	background-color: #0083c3;
	padding-top: 40px;
	padding-bottom: 40px;
	background-image: linear-gradient(
		rgba(0,117,174,.8),
		rgba(0,117,174,.2)),
		url('${YellPattern}');
	;
`;

const PodRow = styled(Row)`
	display: flex;
	justify-content: space-between;
`;

const PromoPod = styled.div`
	width: calc(33.33333% - 20px);
	background: white;
	color: #222;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding: 30px;
	text-align: center;
	text-decoration: none;
	.fa-address-card,
	.fa-chart-line {
		font-size: 2.5rem;
		margin-bottom: 10px;
		margin-top: 10px;
	}
`;

const PodDescriptionText = styled.p`
	font-family: 'Lato';
	font-weight: 400;
	font-size: 1.1rem;
	margin-top: 10px
	margin-bottom: 10px;
	${props => props.shouldHide && `
		@media (max-width: 960px) {
			display: none;
		}
	`}
`;

const PodActionText = styled.p`
	font-family: 'Lato';
	font-weight: 400;
	font-size: 1.1rem;
	color: #0083c3;
	margin-top: 0;
	margin-bottom: 0;
	${PromoPod}:hover & {
		text-decoration: underline;
	}
`;

const ActionTextContainer = styled.div`
	display: none;
	@media (min-width: 960px) {
		display: flex;
		align-items: center;
	}
`;

const ActionIcon = styled(FontAwesomeIcon)`
	color: #0083c3;
	font-size: 1.5rem;
	margin-left: 10px;
`;

const AppPromoPod = styled.div`
    width: calc(33.33333% - 20px);
	background: white;
	color: #222;
	border-radius: 4px;
    padding: 30px;
    background-image: url('${YellFingers}');
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
	@media (min-width: 1250px) {
        background-image: url('${PhoneInHand}'), url('${YellFingers}');
        background-size: auto, cover;
        background-position: bottom -14px right -8px, 50% 50%;
	}
`;

const AppPodContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media (min-width: 1250px) {
        width: 60%;
        align-items: flex-start;
        text-align: left;
    }
`;

const AppPodDescriptionText = styled(PodDescriptionText)`
    font-weight: 700;
`;

const AppStoreLink = styled(SpriteSheet)`
    background-position: 0 -815px;
    width: 135px;
    height: 40px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: block;
`;

const GooglePlayLink = styled(SpriteSheet)`
    background-position: 0 -860px;
    width: 135px;
    height: 40px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: block;
`;

const PromoSection = (props) => (
    <StyledPromoSection>
		<PodRow>
			<AppPromoPod>
				<AppPodContentContainer>
					<AppPodDescriptionText>
						Download the Yell app to find, contact and review local businesses on the go!
					</AppPodDescriptionText>
					<AppStoreLink as="a" href="#" />
					<GooglePlayLink as="a" href="#" />
				</AppPodContentContainer>
			</AppPromoPod>
			<PromoPod as="a" href="#">
				<FontAwesomeIcon icon={faAddressCard} />
				<PodDescriptionText>
					Get listed with the UK's leading business directory
				</PodDescriptionText>
				<ActionTextContainer>
					<PodActionText>
						Get Started
					</PodActionText>
					<ActionIcon icon={faAngleRight} />
				</ActionTextContainer>
			</PromoPod>
			<PromoPod as="a" href="#">
				<FontAwesomeIcon icon={faChartLine} />
				<PodDescriptionText>
					Advertise your business with us online
				</PodDescriptionText>
				<ActionTextContainer>
					<PodActionText>
						Find out more
					</PodActionText>
					<ActionIcon icon={faAngleRight} />
				</ActionTextContainer>
				<PodDescriptionText shouldHide>
					Or call us on <strong>0800 777 445</strong>
				</PodDescriptionText>
			</PromoPod>
		</PodRow>
    </StyledPromoSection>
);

export default PromoSection;
