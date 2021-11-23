import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealsItem = ({ meal: { name, description, price, id } }) => {
  const dollarPrice = `$${price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addToCardHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <div>{name}</div>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{dollarPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCard={addToCardHandler} />
      </div>
    </li>
  );
};
export default MealsItem;
