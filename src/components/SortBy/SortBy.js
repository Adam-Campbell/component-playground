import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import {
    Legend,
    LegendContentContainer,
    LegendChevron,
    InputContainer,
    Input,
    InputLabel
} from '../Drawer/elements';

const Container = styled.div`
    position: relative;
    border: solid 1px #aaa;
    border-radius: ${({ isOpen }) => isOpen ? '3px 3px 0 0' : '3px'};
    ${({ isOpen }) => isOpen && 'border-bottom-color: #f2f2f2;'}
    background: #f2f2f2;
    width: 280px;
    margin-left: auto;
`;

const SortLegend = styled(Legend)`
    color: #0083c3;
    padding: 5px 10px;
    strong {
        margin-left: 8px;
    }
`;

const SortLegendChevron = styled(LegendChevron)`
    color: #0083c3;
`;

const LegendSortIcon = styled(FontAwesomeIcon)`
    margin-right: 10px;
`;

const Fieldset = styled.fieldset`
    border: none;
    margin: 0;
    padding: 0;
`;

const InputsMainContainer = styled.div`
    overflow-y: hidden;
    height: ${({ isOpen }) => isOpen ? 'auto' : '0'};
    position: absolute;
    left: -1px;
    right: -1px;
    background: #f2f2f2;
    ${({ isOpen }) => isOpen && `
        border: solid #aaa 1px;
        border-top: none;
    `}
    border-radius: 0 0 3px 3px;
    z-index: 1000;
    padding: ${({ isOpen }) => isOpen ? '10px 30px' : '0'};
    opacity: ${({ isOpen }) => isOpen ? 1 : 0};
    transition: opacity ease-out 0.2s;
`;

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
        id: 'most_reviewed',
        label: 'Most Reviewed'
    }
];

export class SortBy extends Component {

    static propTypes = {
        sortCriteria: PropTypes.string.isRequired,
        updateSortCriteria: PropTypes.func.isRequired
    }

    state = {
        isOpen: false,
        sortedBy: 'relevance'
    }

    toggleOpen = () => {
        this.setState(state => ({
            isOpen: !state.isOpen
        }));
    }

    handleChange = (newSortValue) => {
        this.setState({
            sortedBy: newSortValue,
            isOpen: false
        });
    }

    render() {
        const { isOpen, sortedBy } = this.state;
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
                                <InputLabel htmlFor={option.id}>
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