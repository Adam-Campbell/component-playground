import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ResultsContext } from '../ResultsContext';
import {
    StyledPaginationControls,
    PageButton,
    PrevButton,
    NextButton
} from './elements';


export class PaginationControls extends Component {

    static contextType = ResultsContext;

    static propTypes = {
        handleChange: PropTypes.func
    };

    render() {
        const { currentPage, totalPages } = this.context;
        const { offset, updateOffset } = this.props;
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