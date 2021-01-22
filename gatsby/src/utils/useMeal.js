import { useState, useContext } from 'react';
import OrderContext from '../components/OrderContext';
import calculateOrderTotal from './calculateOrderTotal';
import attachNamesAndPrices from './attachNamesAndPrices';

export default function useMeal({ meals, values }) {
  // 1. Create some state to hold order
  const [order, setOrder] = useContext(OrderContext);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  // 2. Make a function to add meals to order
  function addToOrder(orderedMeal) {
    setOrder([...order, orderedMeal]);
  }
  // 3. Make a function to remove things from order
  function removeFromOrder(index) {
    setOrder([
      // everything before the item to be removed
      ...order.slice(0, index),
      // everything after the item to be removed
      ...order.slice(index + 1),
    ]);
  }
  // this is the function to run when the order form is submitted
  async function submitOrder(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
    // gather all the data
    const body = {
      order: attachNamesAndPrices(order, meals),
      total: calculateOrderTotal(order, meals),
      name: values.name,
      email: values.email,
      street: values.street,
      suburb: values.suburb,
      postcode: values.postcode,
      phone: values.phone,
      banana: values.banana,
    };
    // 4. Send the data to a serverless function on checkout
    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );
    const text = JSON.parse(await res.text());
    // check if everything worked
    if (res.status >= 400 && res.status < 600) {
      setLoading(false); // turn off loading
      setError(text.message);
    } else {
      setLoading(false);
      setMessage('Success! Your order has been placed');
    }
  }

  return {
    order,
    addToOrder,
    removeFromOrder,
    submitOrder,
    error,
    loading,
    message,
  };
}
