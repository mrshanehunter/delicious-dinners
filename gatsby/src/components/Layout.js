import React from 'react';
import 'normalize.css';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const SiteBorderStyles = styled.div`
  max-width: 90vw;
  margin: 8rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
`;

const ContentStyles = styled.div`
  background: var(--navy);
  color: var(--tan);
  margin: 5rem;
  padding: 2rem;
  border: 0.25vw solid var(--tan);
  box-shadow: 0 0 1rem 1rem rgba(0, 0, 0, 0.3);
  @media (max-width: 600px) {
    margin: 1rem;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <Nav />
        <ContentStyles>{children}</ContentStyles>
        <Footer />
      </SiteBorderStyles>
    </>
  );
}
