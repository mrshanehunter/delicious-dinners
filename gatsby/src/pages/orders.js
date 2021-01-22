import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import formatMoney from '../utils/formatMoney';
import useMeal from '../utils/useMeal';
import OrderStyles from '../styles/OrderStyles';
import OrderItemStyles from '../styles/OrderItemStyles';
import MealOrder from '../components/MealOrder';
import calculateOrderTotal from '../utils/calculateOrderTotal';

export default function OrdersPage({ data }) {
  const meals = data.meals.nodes;
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    street: '',
    suburb: '',
    postcode: '',
    phone: '',
    banana: '',
  });
  const {
    order,
    addToOrder,
    removeFromOrder,
    submitOrder,
    error,
    loading,
    message,
  } = useMeal({
    meals,
    values,
  });
  if (message) {
    return <p>{message}</p>;
  }
  return (
    <>
      <SEO title="Order A Meal" />
      <OrderStyles onSubmit={submitOrder}>
        <fieldset className="info" disabled={loading}>
          <legend>Your Info</legend>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={updateValue}
              required
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={updateValue}
              required
            />
          </label>
          <label htmlFor="street">
            Street Address:
            <input
              type="text"
              id="street"
              name="street"
              value={values.street}
              onChange={updateValue}
            />
          </label>
          <label htmlFor="suburb">
            Suburb:
            <input
              type="text"
              id="suburb"
              name="suburb"
              value={values.suburb}
              onChange={updateValue}
            />
          </label>
          <label htmlFor="postcode">
            Postcode:
            <input
              type="number"
              id="postcode"
              name="postcode"
              minLength="4"
              maxLength="4"
              value={values.postcode}
              onChange={updateValue}
            />
          </label>
          <label htmlFor="phone">
            Contact Number:
            <input
              type="number"
              id="phone"
              name="phone"
              minLength="8"
              maxLength="10"
              value={values.phone}
              onChange={updateValue}
              required
            />
          </label>
          <label htmlFor="banana">
            {' '}
            <input
              type="text"
              id="banana"
              name="banana"
              className="banana"
              value={values.banana}
              onChange={updateValue}
            />
          </label>
        </fieldset>
        <fieldset className="menu" disabled={loading}>
          <legend>Menu</legend>
          {meals.map((meal) => (
            <OrderItemStyles key={meal.id}>
              <Img
                width="50"
                height="50"
                fluid={meal.image.asset.fluid}
                alt={meal.name}
              />
              <div>
                <h2>{meal.name}</h2>
              </div>
              <div>
                <button
                  className="order"
                  type="button"
                  onClick={() => addToOrder({ id: meal.id })}
                >
                  {formatMoney(`${meal.price}`)}
                </button>
              </div>
            </OrderItemStyles>
          ))}
        </fieldset>
        <fieldset className="order" disabled={loading}>
          <legend>Order</legend>
          <MealOrder
            order={order}
            removeFromOrder={removeFromOrder}
            meals={meals}
          />
        </fieldset>
        <fieldset className="place" disabled={loading}>
          <hr />
          <h3>Your Total is {calculateOrderTotal(order, meals)}, incl. GST</h3>
          <div className="place">{error ? <p>Error: {error}</p> : ''}</div>
          <hr />
          <button className="orderBTN" type="submit" disabled={loading}>
            {loading ? 'Placing Order ...' : 'Place Order'}
          </button>
        </fieldset>
      </OrderStyles>
    </>
  );
}

export const query = graphql`
  query {
    meals: allSanityMeals {
      nodes {
        name
        id
        slug {
          current
        }
        price
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
