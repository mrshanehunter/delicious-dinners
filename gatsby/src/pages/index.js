import React from 'react';
import LoadingGrid from '../components/LoadingGrid';
import ItemGrid from '../components/ItemGrid';
import { HomePageGrid } from '../styles/HomePageGrid';
import useLatestData from '../utils/useLatestData';

function ChefsInTheKitchen({ chefsInKitchen }) {
  return (
    <div>
      <h2 className="center shadow">
        <span className="tilt">Chefs in the Kitchen</span>
      </h2>
      {!chefsInKitchen && <LoadingGrid count={4} />}
      {chefsInKitchen && !chefsInKitchen?.length && <p>Kitchen Is Closed</p>}
      {chefsInKitchen?.length && <ItemGrid items={chefsInKitchen} />}
    </div>
  );
}

function DailySpecials({ dailySpecials }) {
  return (
    <div>
      <h2 className="center shadow">
        <span className="tilt">Daily Specials</span>
      </h2>
      {!dailySpecials && <LoadingGrid count={4} />}
      {dailySpecials && !dailySpecials?.length && <p>No Specials Today</p>}
      {dailySpecials?.length && <ItemGrid items={dailySpecials} />}
    </div>
  );
}

export default function HomePage() {
  const { chefsInKitchen, dailySpecials } = useLatestData();
  return (
    <div className="center shadow">
      <h1>Dinner 7 Nights A Week</h1>
      <h2>6pm to Midnight</h2>
      <hr />
      <h3>Dine in or Delivered</h3>
      <hr />
      <HomePageGrid>
        <ChefsInTheKitchen chefsInKitchen={chefsInKitchen} />
        <DailySpecials dailySpecials={dailySpecials} />
      </HomePageGrid>
    </div>
  );
}
