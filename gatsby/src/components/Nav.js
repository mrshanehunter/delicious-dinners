import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  margin-bottom: 15vw;
  .logo {
    transform: translateY(-35%);
  }
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    gap: 2vw;
    align-items: center;
    margin-top: 2rem;
    background-color: var(--tan);
    box-shadow: 1rem 0.5rem 1rem 0.5rem rgba(0, 0, 0, 0.5);
    height: 10vw;
  }
  li {
    order: 1;
    font-family: 'montserrat700';
    color: var(--navy);
    &:nth-child(1) {
      margin-top: -15vw;
    }
    &:nth-child(2) {
      margin-top: -15vw;
    }
    &:nth-child(4) {
      margin-top: -15vw;
    }
    &:nth-child(5) {
      margin-top: -15vw;
    }
  }
  a {
    text-decoration: none;
    color: var(--navy);
    &:hover {
      text-decoration: underline;
      text-decoration-color: var(--navy);
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/meals">Meals</Link>
        </li>
        <li>
          <Link to="/wines">Wines</Link>
        </li>
        <li className="logo-item">
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/chefs">Chefs</Link>
        </li>
        <li>
          <Link to="/orders">Order</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
