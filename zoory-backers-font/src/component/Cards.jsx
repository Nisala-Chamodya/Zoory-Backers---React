import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  {
    /*start hart fill*/
  }
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const handleHeartClicked = () => {
    setIsHeartFilled(!isHeartFilled);
  };
  {
    /*end hart fill*/
  }
  return (
    <div>
      {/*start card */}
      <div className="relative shadow-xl card w-96 bg-base-100">
        <div
          className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-[#FF9800] ${
            isHeartFilled ? "text-rose-500" : "text-white"
          }`}
          onClick={handleHeartClicked}
        >
          <FaHeart className="w-5 h-5 cursor-pointer" />
        </div>
        <Link to={`/menu/${item._id}`}>
          {" "}
          <figure>
            <img
              src={item.image}
              alt={item.name}
              className="transition-all duration-200 hover:scale-105 md:h-72"
            />
          </figure>{" "}
        </Link>
        <div className="card-body">
          <Link to={`/menu/${item._id}`}>
            <h2 className="card-title">{item.name}</h2>
          </Link>
          <p>{item.recipe}</p>
          <div className="items-center justify-between mt-2 card-actions">
            <h5 className="font-semibold">
              <span className="text-sm text-red">R.S.</span>
              {item.price}
            </h5>
            <button className="btn bg-[#FF9800] text-white">Buy Now</button>
          </div>
        </div>
      </div>
      {/*end card */}
    </div>
  );
};

export default Cards;
