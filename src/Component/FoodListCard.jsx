import React from "react";
import FoodCard from "./FoodCard";

const FoodListCard = ({ data }) => {
  return (
    <div className="food_list_card">
      {data.map((food, index) => (
        <FoodCard key={index} data={food} />
      ))}
    </div>
  );
};

export default FoodListCard;
