import React, { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";

const Cards = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleHeartClicked = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  const handleAddToCart = (item) => {
    if (user && user?.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        quantity: 1,
        image,
        price,
        email: user.email,
      };
      console.log(cartItem);
      fetch("http://localhost:6001/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            Swal.fire({
              position: "center",
              icon: "warning",
              title: "The Item Already Added To The Cart",
              showConfirmButton: false,
              timer: 1500,
            });
            throw new Error(`Failed to add item to cart - ${res.statusText}`);
          }
        })
        .then((data) => {
          if (data && data.menuItemId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "The Item Added To The Cart",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            console.error("Unexpected response format:", data);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      Swal.fire({
        title: "Please Login?",
        text: "Without an account can't able to add products!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Signup Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signup", { state: { from: window.location.pathname } });
        }
      });
    }
  };

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
          <figure>
            <img
              src={item.image}
              alt={item.name}
              className="transition-all duration-200 hover:scale-105 md:h-72"
            />
          </figure>
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
            <button
              className="btn bg-[#FF9800] text-white"
              onClick={() => handleAddToCart(item)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {/*end card */}
    </div>
  );
};

export default Cards;
