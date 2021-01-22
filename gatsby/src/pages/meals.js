import React from 'react';
import { graphql } from 'gatsby';
import Menu from '../components/Menu';
import DietarysFilter from '../components/DietarysFilter';
import SEO from '../components/SEO';

export default function MealsPage({ data, pageContext }) {
  const meals = data.meals.nodes;
  return (
    <>
      <SEO
        title={
          pageContext.dietary ? `${pageContext.dietary} Meals` : `All Meals`
        }
      />
      <DietarysFilter activeDietary={pageContext.dietary} />
      <Menu meals={meals} />
    </>
  );
}

export const query = graphql`
  query MealsQuery($dietary: [String]) {
    meals: allSanityMeals(
      filter: { dietarys: { elemMatch: { name: { in: $dietary } } } }
    ) {
      nodes {
        name
        description
        id
        slug {
          current
        }
        dietarys {
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
