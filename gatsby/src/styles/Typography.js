import { createGlobalStyle } from 'styled-components';
import font500 from '../assets/fonts/montserrat-v15-latin-500.woff';
import font700 from '../assets/fonts/montserrat-v15-latin-700.woff';

const Typography = createGlobalStyle`
  @font-face{
    font-family: 'montserrat500';
    src: url(${font500});
  }
  @font-face{
    font-family: 'montserrat700';
    src: url(${font700});
  }
  html {
    font-family: 'montserrat500';
    color: var(--silver)
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: "montserrat700";
    font-weight: normal;
    margin: 0;
  }
 
  a {
    color: var(--tan);
    font-family: "montserrat500";
    text-decoration: none;
    &:hover {
    text-decoration-color: var(--silver);
    }
  }

  mark, .mark {
    
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }
.center {
  text-align: center;
}
.tilt {
  transform: rotate(-2deg);
}
`;
export default Typography;
