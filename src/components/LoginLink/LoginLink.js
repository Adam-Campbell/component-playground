import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { StandardLink, PushRightLink } from './elements';

export const LoginLink = (props) => {
    const LinkElement = props.pushRight ? PushRightLink : StandardLink;
    return (
        <LinkElement to="/">
            <FontAwesomeIcon icon={faUserCircle} />
            <span>Log in</span>
            <FontAwesomeIcon icon={faAngleRight} />
        </LinkElement>
    );
};