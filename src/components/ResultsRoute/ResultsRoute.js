import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import LoginLink from '../LoginLink';
import HeaderSearchForm from '../HeaderSearchForm';
import ResultsFilter from '../ResultsFilter';
import Breadcrumbs from '../Breadcrumbs';
import SocialShareLink from '../SocialShareLink';
import SortBy from '../SortBy';
import { faSlidersH, faMapMarkerAlt, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import {
    HeaderContentContainer,
    Logo,
    BreadcrumbsRow,
    SocialShareLinksContainer,
    ResultsHeaderRow,
    ResultsSummary,
    ResultsHeaderButton,
    ResultsHeaderButtonIcon
} from './elements';
import ShortlistCount from '../ShortlistCount';
import ShortlistSummary from '../ShortlistSummary';
import { 
    SplitLayoutContainer,
    SplitLayoutMain,
    SplitLayoutAside,
    SplitLayoutBody
} from '../LayoutElements';
import { ResultsContextConsumer } from '../ResultsContext';
import ResultsCollection from './ResultsCollection';

const formatSelectedCategory = (selectedCategory) => ([{
    id: selectedCategory.toLowerCase().replace(/ /g, ''),
    text: selectedCategory.toLowerCase()
}])

export const ResultsRoute = (props) => (
    <ResultsContextConsumer>
        {({ additionalCategories }) => (
            <SplitLayoutBody>
                <Header>
                    <HeaderContentContainer>
                        <Logo as="a" href="/" />
                        <HeaderSearchForm 
                            serviceFieldValue={props.serviceFieldValue}
                            locationFieldValue={props.locationFieldValue}
                            handleServiceFieldUpdate={props.updateServiceFormField}
                            handleLocationFieldUpdate={props.updateLocationFormField}
                            handleFormSubmit={props.redirectURL}
                        />
                        <ShortlistCount />
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
                <SplitLayoutContainer>
                    <SplitLayoutAside showAside={props.showingFilters}>
                        <ResultsFilter 
                            categoryData={props.selectedCategory === null ? 
                                            additionalCategories : 
                                            formatSelectedCategory(props.selectedCategory)
                                        }
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
                        <ShortlistSummary />
                    </SplitLayoutAside>
                    <SplitLayoutMain>
                        <ResultsCollection 
                            offset={props.offset}
                            updateOffset={props.updateOffset}
                        />
                    </SplitLayoutMain>
                </SplitLayoutContainer>
            </SplitLayoutBody>
        )}
    </ResultsContextConsumer>
);

ResultsRoute.propTypes = {
    serviceFieldValue: PropTypes.string,
    locationFieldValue: PropTypes.string,
    updateServiceFormField: PropTypes.func.isRequired,
    updateLocationFormField: PropTypes.func.isRequired,
    breadcrumbsArray: PropTypes.arrayOf(PropTypes.object).isRequired,
    showingFilters: PropTypes.bool.isRequired,
    toggleFilters: PropTypes.func.isRequired,
    currentSearchService: PropTypes.string,
    currentSearchLocation: PropTypes.string,
    sortCriteria: PropTypes.string.isRequired,
    updateSortCriteria: PropTypes.func.isRequired,
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
