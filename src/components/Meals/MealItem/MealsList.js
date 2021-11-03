import { DUMMY_MEALS } from "../dummy-meals";
import MealsItem from "./MealsItem";

const Mealslist = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealsItem key={meal.id} meal={meal} />
  ));

  return (
    <>
      <ul>{mealsList}</ul>
    </>
  );
};

export default Mealslist;
