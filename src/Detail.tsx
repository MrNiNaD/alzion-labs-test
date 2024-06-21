import { useLocation } from "react-router-dom";
import Heart from "./assets/heart.png";

const Detail = () => {
  const location = useLocation();
  const data = location?.state;

  return (
    <div className="wrapper">
      <div className="detail-container">
        <span className="detail-text detail-category">{data?.category}</span>
        <span className="detail-text detail-name">{data?.name}</span>
        <span className="detail-text price-label">Price</span>
        <span className="detail-text detail-price">${data?.price}</span>

        <div className="heart-container">
          <img src={Heart} alt="heart" />
        </div>

        <img width={100} height={100} src={data.image} alt={data.name} />
      </div>
    </div>
  );
};

export default Detail;
