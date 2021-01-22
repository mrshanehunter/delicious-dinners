import formatMoney from './formatMoney';

export default function attachNamesAndPrices(order, meals) {
  return order.map((item) => {
    const mealItem = meals.find((meal) => meal.id === item.id);
    return {
      ...item,
      name: mealItem.name,
      thumbnail: mealItem.image.asset.fluid.src,
      price: formatMoney(mealItem.price),
    };
  });
}
