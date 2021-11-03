import classes from "./MealItem.module.css";
const MealsItem = ({ meal: { name, description, price } }) => {
  const dollarPrice = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <div>{name}</div>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{dollarPrice}</div>
      </div>
      <div></div>
    </li>
  );
};
export default MealsItem;
