import React, { useState } from 'react';

// Create an order context so data from an order isn't lost on a page change
const OrderContext = React.createContext();

export function OrderProvider({ children }) {
  // place state in here and access state from the order hook
  const [order, setOrder] = useState([]);
  // pass state to the provider with the value key
  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
