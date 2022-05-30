import React from "react";
const FoodForm = (props) => {
  const handleAddFood = (e) => {
    e.preventDefault();
    if (props.name && props.calories && props.quantity && props.image) {
      const food = {
        id: new Date().getTime().toString(),
        name: props.name,
        image: props.image,
        calories: props.calories,
        quantity: props.quantity
      };
      props.setFoods((foods) => {
        return [...foods, food];
      });
      props.setImage("");
      props.setName("");
      props.setCalories("");
      props.setQuantity("");
    }
  };
  return (
    <>
      <h3>Add Foods</h3>
      <form className="form food-form" onSubmit={handleAddFood}>
        <input
          name="image"
          value={props.image}
          placeholder="Food Image URL"
          onChange={(e) => props.setImage(e.target.value)}
        />
        <input
          name="name"
          value={props.name}
          placeholder="Food Name"
          onChange={(e) => props.setName(e.target.value)}
        />
        <input
          name="calories"
          value={props.calories}
          placeholder="Food Calories"
          onChange={(e) => props.setCalories(e.target.value)}
        />
        <input
          name="quantity"
          value={props.quantity}
          placeholder="Food Quantity"
          onChange={(e) => props.setQuantity(e.target.value)}
        />
        <button>Add Food</button>
      </form>
    </>
  );
};
export default FoodForm;
