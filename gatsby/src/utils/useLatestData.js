import { useState, useEffect } from 'react';

const gql = String.raw;

export default function useLatestData() {
  // Chefs in the Kitchen
  const [chefsInKitchen, setChefsInKitchen] = useState();
  // Daily Specials
  const [dailySpecials, setDailySpecials] = useState();
  // Use a side effect to get data from graphQL endpoint
  useEffect(function () {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "Main_Kitchen") {
              name
              chef {
                name
                _id
                image {
                  asset {
                    url
                    metadata {
                      lqip
                    }
                  }
                }
              }
              specials {
                name
                _id
                image {
                  asset {
                    url
                    metadata {
                      lqip
                    }
                  }
                }
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setChefsInKitchen(res.data.StoreSettings.chef);
        setDailySpecials(res.data.StoreSettings.specials);
      });
  }, []);
  return {
    chefsInKitchen,
    dailySpecials,
  };
}
