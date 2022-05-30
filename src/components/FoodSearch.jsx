const FoodSearch = (props) => {
  const handleSearchFood = (e) => {
    e.preventDefault();

    if (props.foodSearch) {
      const searchQuery = props.foodSearch;

      const searchResult = props.foods.filter((food) => {
        return food.name
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase());
      });
      props.setFoods(searchResult);
      props.setFoodSearch("");
    }
  };
  const handleClearSearch = () => {
    props.setFoods(props.setInitialValue);
  };
  return (
    <>
      <h3>Search Foods</h3>
      <form className="form search-form" onSubmit={handleSearchFood}>
        <div className="form-controll">
          <input
            name="foodSearch"
            value={props.foodSearch}
            placeholder="Search Foods"
            onChange={(e) => props.setFoodSearch(e.target.value)}
          />
        </div>
        <button onClick={handleClearSearch}>Clear Search</button>
      </form>
    </>
  );
};
export default FoodSearch;
