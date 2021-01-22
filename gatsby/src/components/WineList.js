import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const WineGridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2vw;
  grid-auto-rows: auto, auto, 500px;
  padding: 0 3vw;
  align-self: center;
  justify-self: center;
  @media (min-width: 750px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }
`;

const WineStyles = styled.div`
  display: grid;
  //take the row sizing not from the mealstyles div, but from the mealstyles grid
  grid-template-rows: subgrid;
  grid-row: span 3;
  grid-gap: 1.5vw;
  h3,
  p {
    margin: 0;
  }
`;

function WineItem({ wine }) {
  return (
    <WineStyles>
      <Link to={`/wine/${wine.slug.current}`}>
        <h3>
          <span className="mark">{wine.name}</span>
        </h3>
      </Link>
      <p className="dietary">{wine.tags.map((tag) => tag.name).join(' * ')}</p>
      <Img
        fluid={wine.image.asset.fluid}
        alt={wine.name}
        style={{
          border: `0.25vw solid var(--tan)`,
          maxWidth: `200px`,
        }}
      />
    </WineStyles>
  );
}

export default function WineList({ wines }) {
  return (
    <WineGridStyles>
      {wines.map((wine) => (
        <WineItem key={wine.id} wine={wine} />
      ))}
    </WineGridStyles>
  );
}
