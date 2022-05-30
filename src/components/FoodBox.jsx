import React from 'react';

const FoodBox = ({ foods, setFoods }) => {
  return (
    <>
      {foods.length === 0 && <h1>There is nothing to show</h1>}
      <h4 className='total-items'>Total Food Items {foods.length}</h4>
      {foods.map((food) => {
        const { id, name, calories, image, quantity } = food;
        return (
          <div className="wrapper">
            <div className="food-item" key={id || name}>
              <div className="food-info-media">
                <div className="food-img">
                  <img src={image} alt={name} />
                </div>
                <div className="food-info">
                  <h3>{name}</h3>
                  <span>{calories}</span>
                </div>
              </div>

              <div className="item-sidebar">
                <span className="food-qty">{quantity}</span>
                <button className="btn">+</button>
              </div>
            </div>
          </div>
        );
      })}
    </>

  );
};

export default FoodBox;