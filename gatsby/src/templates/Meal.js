import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const MealGrid = styled.div`
  display: grid;
  grid-gap: 3vw;
  padding: 1vw;
  grid-template-columns: 1fr repeat(auto-fill, minmax(400px, 1fr));
`;

export default function SingleMealPage({ data: { meal } }) {
  return (
    <>
      <SEO title={meal.name} image={meal.image?.asset?.fluid?.src} />
      <MealGrid>
        <Img
          fluid={meal.image.asset.fluid}
          style={{
            border: `0.25rem  solid var(--tan)`,
            boxShadow: `0.5rem 0.5rem rgba(0, 0, 0, 0.5)`,
          }}
        />
        <div>
          <h2 className="mark">{meal.name}</h2>
          <p>{meal.description}</p>
        </div>
        <div>
          <ul>
            {meal.dietarys.map((dietary) => (
              <li key={dietary.id}> {dietary.name} </li>
            ))}
          </ul>
        </div>
      </MealGrid>
    </>
  );
}

// This needs to be dynamic based on the slug passed in via context from gatsby-node.js

export const query = graphql`
  query($slug: String!) {
    meal: sanityMeals(slug: { current: { eq: $slug } }) {
      name
      id
      description
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      dietarys {
        name
        id
      }
    }
  }
`;
