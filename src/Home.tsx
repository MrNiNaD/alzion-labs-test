import { useStateHelper } from "./stateHelper";
import { Link } from "react-router-dom";
import Heart from "./assets/heart.png";

function Home() {
  const state = useStateHelper();

  const data = state.data;

  return (
    <div className="wrapper">
      {Array.isArray(data) &&
        data.map((eachData) => {
          return (
            <Link
              key={eachData?.id}
              className="each-plant"
              to={"/" + eachData?.id}
              state={eachData}
            >
              <span className="list-container">
                <span className="category">{eachData.category}</span>
                <span className="plant-name">{eachData.name}</span>

                <span className="price-container">
                  <span className="price">${eachData.price}</span>
                  <img src={Heart} alt="heart" />
                </span>
              </span>
              <img
                className="product-img"
                src={eachData.image}
                alt={eachData.name}
              />
            </Link>
          );
        })}
    </div>
  );
}

export default Home;
