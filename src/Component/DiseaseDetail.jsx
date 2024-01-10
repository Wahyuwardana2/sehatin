import React from "react";

const DiseaseDetail = ({ data }) => {
  return (
    <div className="disease_detail">
      <h2>{data.Penyakit}</h2>
      <p>Energi: {data.energi}</p>
      <p>Protein: {data.protein}</p>
      <p>Lemak: {data.lemak}</p>
      <p>Karbohidrat: {data.karbohidrat}</p>
    </div>
  );
};

export default DiseaseDetail;
