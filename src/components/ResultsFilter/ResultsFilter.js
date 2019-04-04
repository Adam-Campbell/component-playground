import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Drawer from '../Drawer';
import {
    contentData,
    distanceData,
} from './resultsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
    padding-left: 10px;
`;

const FilterIcon = styled(FontAwesomeIcon)`
    font-size: 1.25rem;
    margin-right: 20px;
    color: #aaa;
`;

const Title = styled.p`
    font-family: 'Lato';
    font-weight: 700;
    font-size: 1.25rem;
    color: #222;
    margin-top: 0;
    margin-bottom: 0;
`;

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
        />
        <Drawer 
            title="Content"
            options={contentData}
            canSelectMultiple={true}
            selectionState={props.selectedContentRequirements}
            handleChange={props.updateContentRequirements}
        />
        <Drawer 
            title="Distance"
            options={distanceData}
            canSelectMultiple={false}
            groupName="distance_filter"
            selectionState={props.distanceFilter}
            handleChange={props.updateDistanceFilter}
        />
        <Drawer 
            title="Refine Location"
            options={props.locationData}
            canSelectMultiple={false}
            groupName="location_filter"
            selectionState={props.locationRefinement}
            handleChange={props.updateLocationRefinement}
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

// export class _ResultsFilter extends Component {

//     static propTypes = {
//         categoryData: PropTypes.arrayOf(PropTypes.object),
//         locationData: PropTypes.arrayOf(PropTypes.object),
//     };

//     static defaultProps = {
//         categoryData: [],
//         locationData: []
//     }

//     state = {
//         selectedCategories: [],
//         selectedContentRequirements: [],
//         distanceFilter: null,
//         locationRefinement: null
//     };

//     /**
//      * Collects the current state of the various filters and logs them to the console in a human readable
//      * manner.
//      */
//     logFilterState = () => {
//         const { 
//             selectedCategories, 
//             selectedContentRequirements,
//             distanceFilter,
//             locationRefinement
//         } = this.state;
//         console.log(`
//         ____________________________________
//           Current Results Filter Settings:
//         ____________________________________

//         Selected categories: 
//         ${selectedCategories}

//         Selected content requirements:
//         ${selectedContentRequirements}

//         Distance filter:
//         ${distanceFilter === null ? 'No filter applied' : distanceFilter}

//         Location refinement:
//         ${locationRefinement === null ? 'No refinement applied' : locationRefinement}
//         `);
//     }

//     /**
//      * Function used to update the state of a multi-select filter (checkboxes). The function is curried so
//      * it must be invoked once with the name of the filter it will be used with, before being passed to the
//      * filter.
//      * @param {String} filterName - the name of the filter the function will be used to update.
//      * @param {String} itemId - the id of the item (checkbox) that needs to be updated.
//      * @param {Boolean} isSelected - equal to the 'checked' property on the clicked checkbox.
//      */
//     updateMultiSelect = (filterName) => (itemId, isSelected) => {
//         if (isSelected) {
//             this.setState(state => ({
//                 [filterName]: [
//                     ...state[filterName],
//                     itemId
//                 ]
//             }), this.logFilterState);
//         } else {
//             this.setState(state => ({
//                 [filterName]: state[filterName].filter(el => el !== itemId)
//             }), this.logFilterState);
//         }
//     }

//     /**
//      * Function used to update the state of a single-select filter (radio buttons). The function is curried, 
//      * so must be invoked once with the name of the filter it will be used with, before being passed to the
//      * filter. Whichever of the two single select filters is currently being updated, the other will be set
//      * to null, since they are mutually exclusive.
//      * @param {String} filterName - the name of the filter the function will be used to update.
//      * @param {String} otherFilter - the single select filter that is not currently being interacted with.
//      * @param {String} itemId - itemId - the id of the radio button that was clicked. 
//      */
//     updateSingleSelect = (filterName, otherFilter) => (itemId) => {
//         this.setState(state => ({
//             [filterName]: itemId,
//             [otherFilter]: null
//         }), this.logFilterState);
//     }

//     /**
//      * Sets both single select filters (distanceFilter and locationRefinement) back to null.
//      */
//     clearSingleSelectFilters = () => {
//         this.setState({
//             distanceFilter: null,
//             locationRefinement: null
//         }, this.logFilterState);
//     }

//     render() {
//         const { 
//             selectedCategories,
//             selectedContentRequirements,
//             distanceFilter,
//             locationRefinement
//         } = this.state;

//         const { categoryData, locationData } = this.props;

//         const updateCategoryFilter = this.updateMultiSelect('selectedCategories');
//         const updateContentFilter = this.updateMultiSelect('selectedContentRequirements');
//         const updateDistanceFilter = this.updateSingleSelect('distanceFilter', 'locationRefinement');
//         const updateLocationFilter = this.updateSingleSelect('locationRefinement', 'distanceFilter');

//         return (
//             <div>
//                 <TitleContainer>
//                     <FilterIcon icon={faSlidersH} />
//                     <Title>Filter results</Title>
//                 </TitleContainer>
//                 <Drawer 
//                     title="Category"
//                     options={categoryData}
//                     canSelectMultiple={true}
//                     selectionState={selectedCategories}
//                     handleChange={updateCategoryFilter}
//                 />
//                 <Drawer 
//                     title="Content"
//                     options={contentData}
//                     canSelectMultiple={true}
//                     selectionState={selectedContentRequirements}
//                     handleChange={updateContentFilter}
//                 />
//                 <Drawer 
//                     title="Distance"
//                     options={distanceData}
//                     canSelectMultiple={false}
//                     groupName="distance_filter"
//                     selectionState={distanceFilter}
//                     handleChange={updateDistanceFilter}
//                     clearFilter={this.clearSingleSelectFilters}
//                 />
//                 <Drawer 
//                     title="Refine Location"
//                     options={locationData}
//                     canSelectMultiple={false}
//                     groupName="location_filter"
//                     selectionState={locationRefinement}
//                     handleChange={updateLocationFilter}
//                     clearFilter={this.clearSingleSelectFilters}
//                 />
//             </div>
//         );
//     }
// }

