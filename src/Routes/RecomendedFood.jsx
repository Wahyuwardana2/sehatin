import React, { useState } from "react";
import image from "../Assets/jumbotron.png";
import ListCard from "../Component/ListCard";
import Error from "../Component/Errors";

const RecomendedFood = () => {
  const [result, setResult] = useState(<ListCard data={[]} />);
  const [input, setInput] = useState("Cari makanan yang kamu inginkan");

  const handlerSubmit = (event) => {
    event.preventDefault();
    setResult(<ListCard data={[]} />);
    const url = `http://127.0.0.1:8000/api/recommend_food/${input}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.detail === "Tidak ada rekomendasi makanan untuk penyakit") {
          setResult(
            <Error text="Tidak ada rekomendasi makanan untuk penyakit ini." />
          );
        } else if (data.length === 0) {
          setResult(<Error text="Makanan tidak ada ditemukan !" />);
        } else {
          setResult(<ListCard data={data} />);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setResult(<Error text={`Terjadi kesalahan: ${error.message}`} />);
      });
  };

  return (
    <div className="recipes_route">
      <img src={image} alt="jumbotron" id="design" />
      <div className="text_recipes">
        <h1>Explore Makanan</h1>
        <p>
          Cari makanan yang cocok dengan kondisi penyakit kronis yang sedang
          diterita
        </p>
      </div>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          placeholder="Masukan nama penyakit"
          onChange={(event) => setInput(event.target.value)}
        />
        <input type="submit" value="Cari" />
      </form>

      {result}
    </div>
  );
};

export default RecomendedFood;
