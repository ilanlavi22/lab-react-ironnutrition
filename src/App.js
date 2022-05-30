import { useState } from "react";
import foodData from "./foods.json";
import FoodForm from "./components/FoodForm";
import FoodSearch from "./components/FoodSearch";
import FoodBox from "./components/FoodBox";
import "./index.scss";

export default function App() {
  const setInitialValue = () => {
    return foodData;
  };
  // useState for foods
  const [foods, setFoods] = useState(foodData);
  // useState for food search
  const [foodSearch, setFoodSearch] = useState("");

  // useState for food-form
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [quantity, setQuantity] = useState("");

  return (
    <div className="container">
      <h1>IronNutrition</h1>
      <FoodSearch
        foodSearch={foodSearch}
        setFoodSearch={setFoodSearch}
        setFoods={setFoods}
        foods={foods}
        setInitialValue={setInitialValue}
      />
      <FoodForm
        image={image}
        name={name}
        calories={calories}
        quantity={quantity}
        setImage={setImage}
        setName={setName}
        setCalories={setCalories}
        setQuantity={setQuantity}
        setFoods={setFoods}
      />
      <FoodBox setFoods={setFoods} foods={foods} />
    </div>
  );
}