import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cart, refetch] = useCart();
  const { user } = useContext(AuthContext);
  // const [cartItems, setcartItems] = useState([]);
  // Calculate price
  const calculatePrice = (item) => {
    return item.price * item.quantity;
  };

  // Calculate total price
  const cartSubTotal = cart.reduce((total, item) => {
    return total + calculatePrice(item);
  }, 0);
  const orderTotal = cartSubTotal;

  // Handle delete button
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:6001/carts/${item._id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  // Handle increase quantity
  const handleIncrease = (item) => {
    fetch(`http://localhost:6001/carts/${item._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ quantity: item.quantity + 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  // Handle decrease quantity
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      fetch(`http://localhost:6001/carts/${item._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ quantity: item.quantity - 1 }),
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
        });
    }
  };

  //start handle proceed

  const handleProceed = () => {
    // console.log("handle Proceed");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Thank You!!! Shopping with us 😍",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="section-container">
      {/* start loading banner */}
      <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
        <div className="flex flex-col items-center justify-center gap-8 py-36">
          {/* start text */}
          <div className="px-4 space-y-7">
            <h2 className="text-4xl font-bold leading-snug md:text-5xl md:leading-snug">
              Items Added To The <span className="text-[#FF9800]">Cart</span>{" "}
            </h2>
          </div>
          {/* end text */}
        </div>
      </div>
      {/* end loading banner */}

      {/* start table for the cart */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-white rounded-sm bg-orange">
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-squircle">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-medium">{item.name}</td>
                <td>
                  <button
                    className="btn btn-xs"
                    onClick={() => handleDecrease(item)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    className="w-10 mx-2 overflow-hidden text-center appearance-none"
                    readOnly
                  />
                  <button
                    className="px-2 btn btn-xs"
                    onClick={() => handleIncrease(item)}
                  >
                    +
                  </button>
                </td>
                <td>R.S {calculatePrice(item).toFixed(2)}</td>
                <th>
                  <button
                    className="btn btn-ghost text-red btn-xs"
                    onClick={() => handleDelete(item)}
                  >
                    <FaTrash />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* end table for the cart */}

      {/* start customer details */}
      <div className="flex flex-col items-start justify-between my-12 mt-10 md:flex-row">
        <div className="space-y-3 md:w-1/2">
          <h3 className="font-medium">Customer Details</h3>
          {/* Check if user exists before accessing its properties */}
          {user && (
            <>
              <p>User_Id : - {user.uid}</p>
              <p>Name : - {user.displayName}</p>
              <p>Email : - {user.email}</p>
            </>
          )}
        </div>
        <div className="space-y-3 md:w-1/2">
          <h3 className="font-medium">Shopping details</h3>
          <p>Total Items : {cart.length}</p>
          <p>Total Price : R.S {orderTotal.toFixed(2)}</p>
          {/*   <Link to="/process-checkout">
            <button
              className="mt-5 text-white btn bg-orange"
              onClick={() => handleProceed()}
            >
              Proceed Checkout
            </button>
          </Link>*/}
          <button
            className="mt-5 text-white btn bg-orange"
            onClick={() => handleProceed()}
          >
            Proceed Checkout
          </button>
        </div>
      </div>
      {/* end customer details */}
    </div>
  );
};

export default CartPage;
