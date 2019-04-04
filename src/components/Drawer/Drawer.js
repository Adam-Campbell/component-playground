import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {
    Container,
    Fieldset,
    Legend,
    LegendContentContainer,
    LegendChevron,
    InputsMainContainer,
    InputContainer,
    Input,
    InputLabel
} from './elements';


export class Drawer extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.object).isRequired,
        groupName: PropTypes.string,
        canSelectMultiple: PropTypes.bool.isRequired,
        selectionState: PropTypes.any,
        handleChange: PropTypes.func
    };

    state = {
        isOpen: false
    };

    toggleDrawer = () => {
        this.setState(state => ({
            isOpen: !state.isOpen
        })); 
    }

    render() {
        const { isOpen } = this.state;
        const { title, options, groupName, canSelectMultiple, selectionState, handleChange } = this.props;
        return (
            <Container>
                <Fieldset>
                    <Legend onClick={this.toggleDrawer}>
                        <LegendContentContainer>
                            {title}
                            <LegendChevron isOpen={isOpen}>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </LegendChevron>
                        </LegendContentContainer>
                    </Legend>
                    {canSelectMultiple ? (
                        <InputsMainContainer isOpen={isOpen}>
                            {options.map((option, index) => (
                                <InputContainer key={option.id} isOpen={isOpen}>
                                    <Input
                                        id={option.id}
                                        type="checkbox"
                                        checked={selectionState.includes(option.lower)}
                                        onChange={(e) => handleChange(option.lower, e.target.checked)}
                                    />
                                    <InputLabel htmlFor={option.id}>
                                        {option.label}
                                    </InputLabel>
                                </InputContainer> 
                            ))}
                        </InputsMainContainer>
                    ) : (
                        <InputsMainContainer isOpen={isOpen}>
                            {options.map((option, index) => (
                                <InputContainer key={option.id} isOpen={isOpen}>
                                    <Input
                                        id={option.id}
                                        type="radio"
                                        name={groupName}
                                        checked={selectionState === option.lower}
                                        onClick={() => {
                                            if (selectionState === option.lower) {
                                                this.props.handleChange(null);
                                            }
                                        }}
                                        onChange={() => handleChange(option.lower)}   
                                    />
                                    <InputLabel htmlFor={option.id}>
                                        {option.label}
                                    </InputLabel>
                                </InputContainer> 
                            ))}
                        </InputsMainContainer>
                    )}
                </Fieldset>
            </Container>
        );
    }
}
