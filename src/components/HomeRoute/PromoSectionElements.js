import styled from 'styled-components';
import { Row } from '../LayoutElements';
import YellPattern from '../../images/yell-pattern.png';
import YellFingers from '../../images/yell-fingers-bg.png';
import PhoneInHand from '../../images/phone-in-hand.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SpriteSheet from '../SpriteSheet';

export const StyledPromoSection = styled.section`
	background-color: ${({ theme }) => theme.colors.textAlt };
	padding-top: 40px;
	padding-bottom: 40px;
	background-image: linear-gradient(
		rgba(0,117,174,.8),
		rgba(0,117,174,.2)),
		url('${YellPattern}');
	;
`;

export const PodRow = styled(Row)`
	display: flex;
	justify-content: space-between;
`;

export const PromoPod = styled.div`
	width: calc(33.33333% - 20px);
	background: ${({ theme }) => theme.colors.background };
	color: ${({ theme }) => theme.colors.textPrimary };
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

export const PodDescriptionText = styled.p`
	font-family: 'Lato';
	font-weight: 400;
	font-size: 1.1rem;
	margin-top: 10px
	margin-bottom: 10px;
	max-width: 100%;
	${props => props.shouldHide && `
		@media (max-width: 960px) {
			display: none;
		}
	`}
`;

export const PodActionText = styled.p`
	font-family: 'Lato';
	font-weight: 400;
	font-size: 1.1rem;
	color: ${({ theme }) => theme.colors.textAlt };
	margin-top: 0;
	margin-bottom: 0;
	${PromoPod}:hover & {
		text-decoration: underline;
	}
`;

export const ActionTextContainer = styled.div`
	display: none;
	@media (min-width: 960px) {
		display: flex;
		align-items: center;
	}
`;

export const ActionIcon = styled(FontAwesomeIcon)`
	color: ${({ theme }) => theme.colors.textAlt };
	font-size: 1.5rem;
	margin-left: 10px;
`;

export const AppPromoPod = styled.div`
    width: calc(33.33333% - 20px);
	background: ${({ theme }) => theme.colors.background };
	color: ${({ theme }) => theme.colors.textPrimary };
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

export const AppPodContentContainer = styled.div`
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

export const AppPodDescriptionText = styled(PodDescriptionText)`
	font-weight: 700;
	max-width: 100%;
`;

export const AppStoreLink = styled(SpriteSheet)`
    background-position: 0 -815px;
    width: 135px;
    height: 40px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: block;
`;

export const GooglePlayLink = styled(SpriteSheet)`
    background-position: 0 -860px;
    width: 135px;
    height: 40px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: block;
`;