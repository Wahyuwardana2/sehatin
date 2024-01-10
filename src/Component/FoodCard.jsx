import React from "react";

const FoodCard = ({ data }) => {
  return (
    <div className="food_card">
      <img src={data.gambar} alt={data.nama} />
      <h2>{data.nama}</h2>
      <p>Energi: {data.energi}</p>
      <p>Protein: {data.protein}</p>
      <p>Lemak: {data.lemak}</p>
      <p>Karbohidrat: {data.karbohidrat}</p>
    </div>
  );
};

export default FoodCard;
