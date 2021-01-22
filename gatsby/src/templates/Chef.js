import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const SoloGrid = styled.div`
  display: grid;
  gap: 1.5vw;
  padding: 0.5vw;
  grid-template-rows: repeat(2, minmax(320px, 1fr));
  grid-template-columns: auto;
  .gatsby-image-wrapper {
    width: 260px;
    height: 300px;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(350px, 1fr));
    .gatsby-image-wrapper {
      width: 360px;
      height: 400px;
    }
  }
`;

export default function ChefPage({ data: { chef } }) {
  return (
    <>
      <SEO title={chef.name} image={chef?.image?.asset?.fluid?.src} />
      <SoloGrid>
        <Img fluid={chef.image.asset.fluid} />
        <div className="mark">
          <h2>
            <span className="mark">{chef.name}</span>
          </h2>
          <p>{chef.description}</p>
        </div>
      </SoloGrid>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    chef: sanityChefs(slug: { current: { eq: $slug } }) {
      name
      id
      description
      image {
        asset {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
