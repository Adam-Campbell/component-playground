import React from 'react';
import { faAngleRight, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	StyledPromoSection,
	PodRow,
	PromoPod,
	PodDescriptionText,
	PodActionText,
	ActionTextContainer,
	ActionIcon,
	AppPromoPod,
	AppPodContentContainer, 
	AppPodDescriptionText,
	AppStoreLink,
	GooglePlayLink
} from './PromoSectionElements';

const PromoSection = (props) => (
    <StyledPromoSection>
		<PodRow>
			<AppPromoPod>
				<AppPodContentContainer>
					<AppPodDescriptionText>
						Download the Yell app to find, contact and review local businesses on the go!
					</AppPodDescriptionText>
					<AppStoreLink as="a" href="/" />
					<GooglePlayLink as="a" href="/" />
				</AppPodContentContainer>
			</AppPromoPod>
			<PromoPod as="a" href="/">
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
			<PromoPod as="a" href="/">
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
