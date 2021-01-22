import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const MealGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 4vw;
  grid-auto-rows: auto, auto, 500px;
  padding: 0 1vw;
`;

const MealStyles = styled.div`
  display: grid;
  //take the row sizing not from the mealstyles div, but from the mealstyles grid
  grid-template-rows: subgrid;
  grid-row: span 3;
  grid-gap: 1.5vw;
  h2,
  p {
    margin: 0;
  }
`;

function MenuItem({ meal }) {
  return (
    <MealStyles>
      <Link to={`/meal/${meal.slug.current}`}>
        <h3>
          <span className="mark">{meal.name}</span>
        </h3>
      </Link>
      <p className="dietary">
        {meal.dietarys.map((dietary) => dietary.name).join(' * ')}
      </p>
      <Img
        fluid={meal.image.asset.fluid}
        alt={meal.name}
        style={{ border: `0.25vw solid var(--tan)` }}
      />
    </MealStyles>
  );
}

export default function Menu({ meals }) {
  return (
    <MealGridStyles>
      {meals.map((meal) => (
        <MenuItem key={meal.id} meal={meal} />
      ))}
    </MealGridStyles>
  );
}
