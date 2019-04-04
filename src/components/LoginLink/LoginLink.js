import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Link = styled.a`
  display: flex;
  flex-shrink: 0;
  height: 42px;
  align-items: center;
  ${({ pushRight }) => pushRight && 'margin-left: auto;'}
  font-family: 'Lato';
  font-weight: 400;
  font-size: 0.85rem;
  color: #222;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  .fa-user-circle {
    font-size: 2rem;
    margin-right: 5px;
  }
  .fa-angle-right {
    font-size: 1.25rem;
    margin-left: 40px;
    display: none;
    @media (min-width: 960px) {
      display: initial;
    }
  }
  span {
    display: none;
    @media (min-width: 960px) {
      display: initial;
    }
  }
`;

export const LoginLink = (props) => (
    <Link href="#" pushRight={props.pushRight}>
        <FontAwesomeIcon icon={faUserCircle} />
        <span>Log in</span>
        <FontAwesomeIcon icon={faAngleRight} />
    </Link>
);