import React from 'react';
import { ItemsGrid, ItemStyles } from '../styles/HomePageGrid';

export default function ItemGrid({ items }) {
  return (
    <ItemsGrid>
      {items.map((item) => (
        <ItemStyles key={item._id}>
          <p className="home">
            <span className="mark">{item.name}</span>
          </p>
          <img
            src={`${item.image.asset.url}?w=500&h=500&fit=crop`}
            alt={item.name}
            style={{
              background: `url(${item.image.asset.metadata.lqip})`,
              backgroundSize: `cover`,
            }}
          />
        </ItemStyles>
      ))}
    </ItemsGrid>
  );
}
