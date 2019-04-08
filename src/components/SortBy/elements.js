import styled from 'styled-components';
import {
    Legend,
    LegendChevron,
} from '../Drawer/elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
    position: relative;
    border: solid 1px #aaa;
    border-radius: ${({ isOpen }) => isOpen ? '3px 3px 0 0' : '3px'};
    ${({ isOpen }) => isOpen && 'border-bottom-color: #f2f2f2;'}
    background: #f2f2f2;
    width: 280px;
    margin-left: auto;
`;

export const SortLegend = styled(Legend)`
    color: #0083c3;
    padding: 5px 10px;
    strong {
        margin-left: 8px;
    }
`;

export const SortLegendChevron = styled(LegendChevron)`
    color: #0083c3;
`;

export const LegendSortIcon = styled(FontAwesomeIcon)`
    margin-right: 10px;
`;

export const Fieldset = styled.fieldset`
    border: none;
    margin: 0;
    padding: 0;
`;

export const InputsMainContainer = styled.div`
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
