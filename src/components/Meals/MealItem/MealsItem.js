import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealsItem = ({ meal: { name, description, price, id } }) => {
  const dollarPrice = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <div>{name}</div>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{dollarPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};
export default MealsItem;
