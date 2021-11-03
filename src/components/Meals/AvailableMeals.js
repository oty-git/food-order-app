import classes from "./AvailableMeals.module.css";
import Mealslist from "./MealItem/MealsList";
import Card from "../UI/Card";

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <Mealslist />
      </Card>
    </section>
  );
};
export default AvailableMeals;
