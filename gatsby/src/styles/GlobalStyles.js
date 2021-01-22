import { createGlobalStyle } from 'styled-components';
import bg from '../assets/images/bg-01.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    --navy: #223a5e;
    --black: #000000;
    --tan: #cc9321;
    --white: #fefefa;
    --silver: #a6a9aa;
  }
  html {
    background-color: var(--navy);
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    
  body {
    font-size: 62.5%;
   
    @media (min-width: 768px) {
      font-size: 75%;
    }
    @media (min-width: 1024px) {
      font-size: 90%;
    }
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--tan);
    color: var(--navy);
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 4px;
    box-shadow: var(--cast) var(--cast) 0 var(--black);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 6px;
    }
  }
  
  /* Scrollbar Styles */

  body::-webkit-scrollbar {
    width: 12px;
    scrollbar-base-color: var(--silver);
  }
  html {
    scrollbar-width: thick;
    scrollbar-color: var(--navy) var(--tan);
  }
  body::-webkit-scrollbar-track {
    background: var(--silver);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--navy) ;
    border-radius: 6px;
    border: 2px solid var(--tan);
  }

  hr {
    width: 75%;
    margin: 2vw auto;
    border-color: var(--tan);
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-5deg);
    position: relative;
    display: inline-block;
  }

  .dietary {
    color: var(--silver);
    
  }
  .home {
    background: var(--navy);
    padding: 0.75vw;
    border: 0.05rem solid var(--tan);
    
  }
  .shadow {
    text-shadow: 0.5rem 0.5rem 0.5rem rgba(0,0,0,0.5);
  }
   
`;

export default GlobalStyles;
