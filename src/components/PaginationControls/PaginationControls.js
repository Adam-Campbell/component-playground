import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ResultsContext } from '../ResultsContext';

const StyledPaginationControls = styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const PageButton = styled.button`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 0.85rem;
    color: ${({ isActive }) => isActive ? 'white' : '#222'};
    border: none;
    border-radius: 3px;
    height: 30px;
    width: 30px;
    background: ${({ isActive }) => isActive ? '#0083c3' : '#e5e5e5'};
    transition: background ease-out 0.2s;
    cursor: pointer;
    margin-left: 5px;
    margin-right: 5px;
    &:hover {
        background: ${({ isActive }) => isActive ? '#339ccf' : '#f2f2f2'};
    }
    &:disabled {
        color: #aaa;
        cursor: initial;
        &:hover {
            background: #e5e5e5;
        }
    }
`;

const PrevButton = styled(PageButton)`
    margin-right: auto;
    margin-left: 0;
    width: 120px;
`;

const NextButton = styled(PageButton)`
    margin-left: auto;
    margin-right: 0;
    width: 120px;
`;

export class PaginationControls extends Component {

    static contextType = ResultsContext;

    static propTypes = {
        handleChange: PropTypes.func
    };

    render() {
        const { currentPage, totalPages } = this.context;
        const { offset, updateOffset } = this.props;
        console.log('Pagination controls was rerendered', currentPage);
        if (currentPage === null || totalPages === null) {
            return null;
        }
        return (
            <StyledPaginationControls>
                <PrevButton 
                    disabled={currentPage <= 1} 
                    isActive={currentPage > 1}
                    onClick={() => updateOffset(offset - 1)}
                >Previous</PrevButton>
                {new Array(totalPages).fill(0).map((el, index) => (
                    <PageButton 
                        key={index} 
                        isActive={currentPage === index + 1}
                        onClick={() => updateOffset(index)}
                    >{index+1}</PageButton>
                ))}
                <NextButton 
                    disabled={currentPage >= totalPages } 
                    isActive={currentPage < totalPages}
                    onClick={() => updateOffset(offset + 1)}
                >Next</NextButton>
            </StyledPaginationControls>
        )
    }
}