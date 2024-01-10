import image from "../Assets/mainImage.png";
import {
  HiOutlineDocumentText,
  HiOutlineClock,
  HiOutlineKey,
} from "react-icons/hi";
import { BsBoxSeam } from "react-icons/bs";
import { Link } from "react-router-dom";
// import LinkCard from "../Component/ListCard";
//hi
export default function Main() {
  let iconStyle = {
    fontSize: "2em",
  };

  return (
    <>
      <div className="main_jombotron">
        <section>
          <h1>Ayo Sehatin !!</h1>
          <p>Bingung cari makanan karena menderita sakit kronis?</p>
          <Link to="/rekomendasimakanan">
            <span>Cari Makan</span>
          </Link>
        </section>
        <img src={image} alt="img2" />
      </div>

      <div className="main_features" id="features">
        <h1>Makanan</h1>
        <p id="description">
          Terdapat beberapa fitur yang berguna untuk membantu mu mencari makanan
        </p>
        <section>
          <div className="fitur">
            <HiOutlineDocumentText style={iconStyle} />
            <p>Detail informasi pada sebuah makanan</p>
          </div>
          <div className="fitur">
            <HiOutlineClock style={iconStyle} />
            <p>Waktu yang cocok untuk makan</p>
          </div>
          <div className="fitur">
            <BsBoxSeam style={iconStyle} />
            <p>Total porsi dalam sekali makan</p>
          </div>
          <div className="fitur">
            <HiOutlineKey style={iconStyle} />
            <p>Tingkat keamanan</p>
          </div>
        </section>
      </div>

      <div className="main_menu">
        <h1>Menu Makanan</h1>
        <p>Beberapa menu makanan yang sudah kamu temui</p>
        <Link to="/rekomendasimakanan">
          <span>Lebih Banyak</span>
        </Link>
      </div>
    </>
  );
}
