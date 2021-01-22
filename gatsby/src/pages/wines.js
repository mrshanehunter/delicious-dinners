import React from 'react';
import { graphql } from 'gatsby';
import WineList from '../components/WineList';
import TagsFilter from '../components/TagsFilter';
import SEO from '../components/SEO';

export default function WinesPage({ data, pageContext }) {
  const wines = data.wines.nodes;
  return (
    <>
      <SEO title={pageContext.tag ? `${pageContext.tag} Wines` : `All Wines`} />
      <TagsFilter activeTag={pageContext.tag} />
      <WineList wines={wines} />
    </>
  );
}

export const query = graphql`
  query WinesQuery($tag: [String]) {
    wines: allSanityWines(
      filter: { tags: { elemMatch: { name: { in: $tag } } } }
    ) {
      nodes {
        name
        description
        id
        slug {
          current
        }
        tags {
          id
          name
        }
        image {
          asset {
            fixed(width: 600, height: 300) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
