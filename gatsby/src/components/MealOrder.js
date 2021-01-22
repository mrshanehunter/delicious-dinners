import React from 'react';
import Img from 'gatsby-image';
import OrderItemStyles from '../styles/OrderItemStyles';
import formatMoney from '../utils/formatMoney';

export default function mealOrder({ order, meals, removeFromOrder }) {
  return (
    <>
      {order.map((singleOrder, index) => {
        const mealItem = meals.find((meal) => meal.id === singleOrder.id);
        return (
          <OrderItemStyles key={`${singleOrder.id}-${index}`}>
            <Img fluid={mealItem.image.asset.fluid} />
            <h3>{mealItem.name}</h3>
            <p>
              {formatMoney(`${mealItem.price}`)}
              <button
                type="button"
                className="remove"
                title={`Remove ${mealItem.name} from order`}
                onClick={() => removeFromOrder(index)}
              >
                &times;
              </button>
            </p>
          </OrderItemStyles>
        );
      })}
    </>
  );
}
