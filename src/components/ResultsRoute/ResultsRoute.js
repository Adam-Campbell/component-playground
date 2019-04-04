import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import LoginLink from '../LoginLink';
import SearchForm from '../ResultsSearchForm';
import BusinessCard from '../BusinessCard';
import ResultsFilter from '../ResultsFilter';
import Breadcrumbs from '../Breadcrumbs';
import SocialShareLink from '../SocialShareLink';
import SortBy from '../SortBy';
import { faSlidersH, faMapMarkerAlt, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import {
    Body,
    HeaderContentContainer,
    Logo,
    Shortlist,
    ResultsContentContainer,
    ResultsMainContent,
    ResultsAside,
    MapPod,
    BreadcrumbsRow,
    SocialShareLinksContainer,
    ResultsHeaderRow,
    ResultsSummary,
    ResultsHeaderButton,
    ResultsHeaderButtonIcon
} from './elements';

export const ResultsRoute = (props) => (
    <Body>
        <Header>
            <HeaderContentContainer>
                <Logo as="a" href="/" />
                <SearchForm 
                    serviceFieldValue={props.serviceFieldValue}
                    locationFieldValue={props.locationFieldValue}
                    handleServiceFieldUpdate={props.updateServiceFormField}
                    handleLocationFieldUpdate={props.updateLocationFormField}
                    handleFormSubmit={props.redirectURL}
                    isSelfControlled={false}
                />
                <Shortlist>
                    Shortlist (0)
                </Shortlist>
                <LoginLink />
            </HeaderContentContainer>
        </Header>
        <BreadcrumbsRow>
            <Breadcrumbs breadcrumbsArray={props.breadcrumbsArray} />
            <SocialShareLinksContainer>
                <SocialShareLink platform="facebook" />
                <SocialShareLink platform="twitter" />
            </SocialShareLinksContainer>
        </BreadcrumbsRow>
        <ResultsHeaderRow>
            <ResultsSummary>
                <span>{props.currentSearchService}</span> in <span>{props.currentSearchLocation}</span>
            </ResultsSummary>
            <ResultsHeaderButton isActive={props.showingFilters} onClick={props.toggleFilters}>
                {props.showingFilters ? (
                        <>
                            <ResultsHeaderButtonIcon icon={faAngleLeft} />
                            Close Filters
                        </>     
                ) : (
                        <>
                            <ResultsHeaderButtonIcon icon={faSlidersH} />
                            Filters
                        </>
                )}
            </ResultsHeaderButton>
            <ResultsHeaderButton as="a" href="#">
                <ResultsHeaderButtonIcon icon={faMapMarkerAlt} />
                View map
            </ResultsHeaderButton>
            <SortBy 
                sortCriteria={props.sortCriteria}
                updateSortCriteria={props.updateSortCriteria}
            />
        </ResultsHeaderRow>
        <ResultsContentContainer>
            <ResultsAside showFilters={props.showingFilters}>
                <MapPod />
                <ResultsFilter 
                    categoryData={props.categoryData}
                    locationData={props.locationData}
                    selectedCategory={props.selectedCategory}
                    selectedContentRequirements={props.selectedContentRequirements}
                    distanceFilter={props.distanceFilter}
                    locationRefinement={props.locationRefinement}
                    updateSelectedCategory={props.updateSelectedCategory}
                    updateContentRequirements={props.updateContentRequirements}
                    updateDistanceFilter={props.updateDistanceFilter}
                    updateLocationRefinement={props.updateLocationRefinement}
                /> 
            </ResultsAside>
            <ResultsMainContent>
                <BusinessCard businessId="a1" />
                <BusinessCard businessId="b2" />
                <BusinessCard businessId="a1" />
                <BusinessCard businessId="b2" />
            </ResultsMainContent>
        </ResultsContentContainer>
    </Body>
);

ResultsRoute.propTypes = {
    serviceFieldValue: PropTypes.string,
    locationFieldValue: PropTypes.string,
    updateServiceFormField: PropTypes.func.isRequired,
    updateLocationFormField: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
    breadcrumbsArray: PropTypes.arrayOf(PropTypes.object).isRequired,
    showingFilters: PropTypes.bool.isRequired,
    toggleFilters: PropTypes.func.isRequired,
    currentSearchService: PropTypes.string,
    currentSearchLocation: PropTypes.string,
    sortCriteria: PropTypes.string.isRequired,
    updateSortCriteria: PropTypes.func.isRequired,
    categoryData: PropTypes.arrayOf(PropTypes.object).isRequired,
    locationData: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedCategory: PropTypes.string,
    selectedContentRequirements: PropTypes.arrayOf(PropTypes.string).isRequired,
    distanceFilter: PropTypes.string,
    locationRefinement: PropTypes.string,
    updateSelectedCategory: PropTypes.func.isRequired,
    updateContentRequirements: PropTypes.func.isRequired,
    updateDistanceFilter: PropTypes.func.isRequired,
    updateLocationRefinement: PropTypes.func.isRequired
};
