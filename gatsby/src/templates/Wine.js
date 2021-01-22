import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const WineGrid = styled.div`
  display: grid;
  grid-gap: 3vw;
  padding: 1vw;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export default function SingleWinePage({ data: { wine } }) {
  return (
    <>
      <SEO title={wine.name} image={wine.image?.asset?.fluid?.src} />
      <WineGrid>
        <Img
          fluid={wine.image.asset.fluid}
          style={{
            border: `0.25rem  solid var(--tan)`,
            boxShadow: `0.5rem 0.5rem rgba(0, 0, 0, 0.5)`,
          }}
        />
        <div>
          <h2 className="mark">{wine.name}</h2>
          <p>{wine.description}</p>
        </div>
        <div>
          <ul>
            {wine.tags.map((tag) => (
              <li key={tag.id}> {tag.name} </li>
            ))}
          </ul>
        </div>
      </WineGrid>
    </>
  );
}

// This needs to be dynamic based on the slug passed in via context from gatsby-node.js

export const query = graphql`
  query($slug: String!) {
    wine: sanityWines(slug: { current: { eq: $slug } }) {
      name
      id
      description
      image {
        asset {
          fluid(maxWidth: 375) {
            ...GatsbySanityImageFluid
          }
        }
      }
      tags {
        name
        id
      }
    }
  }
`;
