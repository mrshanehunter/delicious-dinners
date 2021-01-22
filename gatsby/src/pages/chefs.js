import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

const ChefGrid = styled.div`
  display: grid;
  gap: 2vw;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
  @media (min-width: 1178px) {
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    gap: 1vw;
  }
`;

const ChefStyles = styled.div`
  a {
    text-decoration: none;
  }
  .gatsby-image-wrapper {
    height: 350px;
    margin: 0 auto;
  }
  h2 {
    transform: rotate(-5deg);
    text-align: center;
    font-size: 4vw;
    margin-bottom: -2rem;
    position: relative;
    z-index: 2;
  }
  @media (min-width: 1078px) {
    .gatsby-image-wrapper {
      height: 250px;
    }
  }
`;

export default function ChefsPage({ data, pageContext }) {
  const chefs = data.chefs.nodes;
  return (
    <>
      <SEO
        title={`Chefs - Page ${pageContext.currentPage || 1}
        `}
      />
      <Pagination
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        totalCount={data.chefs.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="/chefs"
      />
      <ChefGrid>
        {chefs.map((chef) => (
          <ChefStyles key={chef.id}>
            <Link to={`/chef/${chef.slug.current}`}>
              <h2>
                <span className="mark">{chef.name}</span>
              </h2>
            </Link>
            <Img fluid={chef.image.asset.fluid} />
          </ChefStyles>
        ))}
      </ChefGrid>
    </>
  );
}

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 4) {
    chefs: allSanityChefs(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        name
        id
        slug {
          current
        }
        description
        image {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
