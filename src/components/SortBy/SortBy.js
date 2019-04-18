import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import {
    LegendContentContainer,
    InputContainer,
    Input,
    InputLabel
} from '../Drawer/elements';
import {
    Container,
    SortLegend,
    SortLegendChevron,
    LegendSortIcon,
    Fieldset,
    InputsMainContainer,
} from './elements';

const sortOptions = [
    {
        id: 'relevance',
        label: 'Relevance'
    },
    {
        id: 'distance',
        label: 'Distance'
    },
    {
        id: 'rating',
        label: 'Rating'
    },
    {
        id: 'mostreviewed',
        label: 'Most Reviewed'
    }
];

export class SortBy extends Component {

    static propTypes = {
        sortCriteria: PropTypes.string.isRequired,
        updateSortCriteria: PropTypes.func.isRequired
    }

    state = {
        isOpen: false
    }

    toggleOpen = () => {
        this.setState(state => ({
            isOpen: !state.isOpen
        }));
    }

    render() {
        const { isOpen } = this.state;
        const { sortCriteria, updateSortCriteria } = this.props;
        const currentSort = sortOptions.find(option => option.id === sortCriteria).label.toLowerCase();
        return (
            <Container isOpen={isOpen}>
                <Fieldset>
                    <SortLegend onClick={this.toggleOpen}>
                        <LegendContentContainer>
                            <LegendSortIcon icon={faSortAmountDown} />
                            Sort by <strong>{ currentSort }</strong>
                            <SortLegendChevron isOpen={isOpen}>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </SortLegendChevron>
                        </LegendContentContainer>
                    </SortLegend>
                    <InputsMainContainer isOpen={isOpen}>
                        {sortOptions.map((option, index) => (
                            <InputContainer key={index} isOpen={isOpen}>
                                <Input 
                                    type="radio"
                                    id={option.id}
                                    name="sort_by"
                                    checked={option.id === sortCriteria}
                                    onChange={() => {
                                        updateSortCriteria(option.id);
                                        this.toggleOpen();
                                    }}
                                />
                                <InputLabel htmlFor={option.id} capitalize>
                                    {option.label}
                                </InputLabel>
                            </InputContainer>
                        ))}
                    </InputsMainContainer>
                </Fieldset>
            </Container>
        );
    }
}