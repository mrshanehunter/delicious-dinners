import formatMoney from './formatMoney';

export default function calculateOrderTotal(order, meals) {
  // Loop over each item in the order array
  const total = order.reduce((runningTotal, singleOrder) => {
    const mealItem = meals.find((meal) => meal.id === singleOrder.id);
    return runningTotal + mealItem.price;
  }, 0);
  return formatMoney(total);
}
