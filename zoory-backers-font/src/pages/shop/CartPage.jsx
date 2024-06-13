import React from 'react';
import { FaTrash } from 'react-icons/fa';
import useCart from '../../hooks/useCart';
import Swal from 'sweetalert2';

const CartPage = () => {
  const [cart, refetch] = useCart();

  //Handle delete button

  const handleDelete =(item)=>{
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
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  }

  return (
    <div className='section-container'>
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
                  <button className="btn btn-xs">-</button>
                  <input
                    type="number"
                    value={item.quantity}
                    className="w-10 mx-2 overflow-hidden text-center appearance-none"
                    readOnly
                  />
                  <button className="px-2 btn btn-xs">+</button>
                </td>
                <td>{item.price}</td>
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
    </div>
  );
};

export default CartPage;
