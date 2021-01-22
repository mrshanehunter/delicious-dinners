import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  text-align: center;
  margin-top: 4rem;
  background-color: var(--tan);
  box-shadow: 1rem 0.5rem 1rem 0.5rem rgba(0, 0, 0, 0.5);
  color: var(--navy);
  a {
    color: var(--navy);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p>&copy; {new Date().getFullYear()} That Guy From Marketing&reg;</p>
      <p>
        Design and build by
        <a href="https://thatguyfrommarketing.com">
          &nbsp;That Guy From Marketing&reg;
        </a>
      </p>
    </FooterStyles>
  );
}
