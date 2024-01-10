import React, { useState } from "react";
import image from "../Assets/jumbotron.png";
import Error from "../Component/Errors";

const RecommendDisease = () => {
  const [result, setResult] = useState(null);
  const [input, setInput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/recommend_disease/${input}`
      );

      if (!response.ok) {
        throw new Error(`Server Error: ${response.status}`);
      }

      const data = await response.json();

      if (data.length === 0) {
        setResult(<Error text="Makanan tidak ada ditemukan !" />);
      } else {
        setResult(
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Penyakit</th>
                  <th>Energi</th>
                  <th>Protein</th>
                  <th>Lemak</th>
                  <th>Karbohidrat</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.Penyakit}</td>
                    <td>{item.energi}</td>
                    <td>{item.protein}</td>
                    <td>{item.lemak}</td>
                    <td>{item.karbohidrat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setResult(<Error text={`Terjadi kesalahan: ${error.message}`} />);
    }
  };

  return (
    <div className="recipes_route">
      <img src={image} alt="jumbotron" id="design" />
      <div className="text_recipes">
        <h1>Cari Tahu !!</h1>
        <p>
          Cari tahu penyakit berdasarkan makanan yang ingin kamu konsumsi
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Masukkan nama penyakit"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <input type="submit" value="Cari" />
      </form>

      {result}
    </div>
  );
};

export default RecommendDisease;
