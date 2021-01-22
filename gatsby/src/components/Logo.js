import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo-01.svg';

const LogoStyles = styled.div`
  position: relative;
  z-index: 5;
  top: 0;
  left: 0;
  width: 25vw;
  height: 25vw;
  box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.5);
  background: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 0;
`;

export default function Logo() {
  return <LogoStyles className="logo" />;
}
