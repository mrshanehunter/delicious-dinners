import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const DietarysStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  background-color: var(--navy);
  border: 0.25vw solid var(--tan);
  padding: 1.5rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1.5rem;
    align-items: center;
    padding: 5px;
    background: var(--tan);
    color: var(--navy);
    border-radius: 2px;
    text-decoration: none;
    .count {
      background: var(--navy);
      color: var(--tan);
      padding: 2px 5px;
    }
    &[aria-current='page'] {
      background: var(--silver);
      color: navy;
      border: 0.25px solid var(--navy);
    }
  }
`;

function countMealsInDietarys(meals) {
  // Return the meals with counts
  const counts = meals
    .map((meal) => meal.dietarys)
    .flat()
    .reduce((acc, dietary) => {
      // check if this is an existing dietary
      const existingDietary = acc[dietary.id];
      if (existingDietary) {
        // if it is, increment by 1
        existingDietary.count += 1;
      } else {
        // otherwise create a new entry in the acc and set it to one
        acc[dietary.id] = {
          id: dietary.id,
          name: dietary.name,
          count: 1,
        };
      }
      return acc;
    }, {});
  // sort them based on their count
  const sortedDietarys = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedDietarys;
}

export default function DietarysFilter({ activeDietary }) {
  // get a list of all the dietary tags
  // get a list of all the meals with their tags
  const { dietarys, meals } = useStaticQuery(graphql`
    query {
      dietarys: allSanityDietarys {
        nodes {
          name
          id
        }
      }
      meals: allSanityMeals {
        nodes {
          name
          id
          dietarys {
            name
            id
          }
        }
      }
    }
  `);
  // count howw many meals are under each tag
  const dietarysWithCounts = countMealsInDietarys(meals.nodes);
  // loop over the list of tags and display the meals that have that tag
  return (
    <DietarysStyles>
      <Link to="/meals">
        <span className="name">All</span>
        <span className="count">{meals.nodes.length}</span>
      </Link>
      {dietarysWithCounts.map((dietary) => (
        <Link
          to={`/dietary/${dietary.name}`}
          key={dietary.id}
          className={dietary.name === activeDietary ? 'active' : ''}
        >
          <span className="name">{dietary.name}</span>
          <span className="count">{dietary.count}</span>
        </Link>
      ))}
    </DietarysStyles>
  );
}
