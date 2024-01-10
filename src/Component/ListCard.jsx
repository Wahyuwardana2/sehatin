import React, { useState } from "react";
import { BsBoxSeam, BsSearch } from "react-icons/bs";
import { HiOutlineClock, HiOutlineKey } from "react-icons/hi";
import { Link } from "react-router-dom";

const Load = ({ data }) => {
  const [visibleItems, setVisibleItems] = useState(10);

  const loadMore = () => {
    setVisibleItems(visibleItems + 10);
  };

  const style = {
    color: "#2dba1e",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <div>
      <section id="list_card">
        <div className="menu_masakan">
          {data.slice(0, visibleItems).map((el, i) => (
            <div className="list_masakan" key={i}>
              <img
                src={el.gambar}
                alt={"image" + i}
                className="list_masakan_img"
              />
              <Link to={"/" + el.id} style={linkStyle}>
                <h2>{el.nama}</h2>
              </Link>
              <div className="footer">
                <div className="select">
                  <BsBoxSeam style={style} />
                  <p>{el.energi || "Tidak ditemukan"}</p>
                </div>
                <div className="select">
                  <HiOutlineClock style={style} />
                  <p>{el.protein || "Tidak ditemukan"}</p>
                </div>
                <div className="select">
                  <HiOutlineKey style={style} />
                  <p>{el.lemak || "Tidak ditemukan"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div>
        {data.length > visibleItems && (
          <button id="refresh" onClick={loadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Load;

const Loading = () => {
  return (
    <div className="loading_text">
      <BsSearch style={{ fontSize: "4em", color: "#A7BBC7" }} />
      <p>Mencari makanan...</p>
    </div>
  );
};

export { Loading };
