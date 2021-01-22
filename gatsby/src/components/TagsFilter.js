import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const TagsStyles = styled.div`
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

function countWinesInTags(wines) {
  // Return the meals with counts
  const counts = wines
    .map((wine) => wine.tags)
    .flat()
    .reduce((acc, tag) => {
      // check if this is an existing tag
      const existingTag = acc[tag.id];
      if (existingTag) {
        // if it is, increment by 1
        existingTag.count += 1;
      } else {
        // otherwise create a new entry in the acc and set it to one
        acc[tag.id] = {
          id: tag.id,
          name: tag.name,
          count: 1,
        };
      }
      return acc;
    }, {});
  // sort them based on their count
  const sortedTags = Object.values(counts).sort((a, b) => b.count - a.count);
  return sortedTags;
}

export default function TagsFilter({ activeTag }) {
  // get a list of all the dietary tags
  // get a list of all the meals with their tags
  const { tags, wines } = useStaticQuery(graphql`
    query {
      tags: allSanityTags {
        nodes {
          name
          id
        }
      }
      wines: allSanityWines {
        nodes {
          name
          id
          tags {
            name
            id
          }
        }
      }
    }
  `);
  // count howw many meals are under each tag
  const tagsWithCounts = countWinesInTags(wines.nodes);
  // loop over the list of tags and display the meals that have that tag
  return (
    <TagsStyles>
      <Link to="/wines">
        <span className="name">All</span>
        <span className="count">{wines.nodes.length}</span>
      </Link>
      {tagsWithCounts.map((tag) => (
        <Link
          to={`/tag/${tag.name}`}
          key={tag.id}
          className={tag.name === activeTag ? 'active' : ''}
        >
          <span className="name">{tag.name}</span>
          <span className="count">{tag.count}</span>
        </Link>
      ))}
    </TagsStyles>
  );
}
