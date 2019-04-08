import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '../Drawer';
import {
    contentData,
    distanceData,
} from './resultsData';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import {
    TitleContainer,
    FilterIcon,
    Title
} from './elements';

export const ResultsFilter = (props) => (
    <div>
        <TitleContainer>
            <FilterIcon icon={faSlidersH} />
            <Title>Filter results</Title>
        </TitleContainer>
        <Drawer 
            title="Category"
            options={props.categoryData}
            canSelectMultiple={false}
            groupName="categories"
            selectionState={props.selectedCategory}
            handleChange={props.updateSelectedCategory}
            clearFilter={() => props.updateSelectedCategory(null)}
            shouldCapitalize={true}
        />
        <Drawer 
            title="Content"
            options={contentData}
            canSelectMultiple={true}
            selectionState={props.selectedContentRequirements}
            handleChange={props.updateContentRequirements}
            shouldCapitalize={true}
        />
        <Drawer 
            title="Distance"
            options={distanceData}
            canSelectMultiple={false}
            groupName="distance_filter"
            selectionState={props.distanceFilter}
            handleChange={props.updateDistanceFilter}
            shouldCapitalize={false}
        />
        <Drawer 
            title="Refine Location"
            options={props.locationData}
            canSelectMultiple={false}
            groupName="location_filter"
            selectionState={props.locationRefinement}
            handleChange={props.updateLocationRefinement}
            shouldCapitalize={true}
        />
    </div>
);

ResultsFilter.propTypes = {
    categoryData: PropTypes.arrayOf(PropTypes.object),
    locationData: PropTypes.arrayOf(PropTypes.object),
    selectedCategory: PropTypes.string,
    selectedContentRequirements: PropTypes.arrayOf(PropTypes.string),
    distanceFilter: PropTypes.string,
    locationRefinement: PropTypes.string,
    updateSelectedCategory: PropTypes.func.isRequired,
    updateContentRequirements: PropTypes.func.isRequired,
    updateDistanceFilter: PropTypes.func.isRequired,
    updateLocationRefinement: PropTypes.func.isRequired
};