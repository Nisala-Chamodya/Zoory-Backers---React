import React from 'react'
import { FaTrash } from 'react-icons/fa'

const CartPage = () => {
  return (
    <div className='section-container'>
        {/*start loading banner */}
      <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% ">
        <div className="flex flex-col items-center justify-center gap-8 py-36 ">
          {/*start text*/}
          <div className="px-4 space-y-7">
            <h2 className="text-4xl font-bold leading-snug md:text-5xl md:leading-snug">
              Items Added To The <span className="text-[#FF9800]">Cart</span>{" "}
            </h2>
          </div>
          {/*end text*/}
        </div>
      </div>
      {/*end loading banner */}

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
            {/* row 1 */}
            
              <tr >
                <td>1</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-squircle">
                        <img src="{item.image}" alt="{item.name}" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-medium">item name</td>
                <td>
                  <button
                    className="btn btn-xs"
                  
                  >
                    -
                  </button>
                  <input
                    type="number"
                    
                    className="w-10 mx-2 overflow-hidden text-center appearance-none"
                  
                  />
                  <button
                    className="px-2 btn btn-xs"
                    
                  >
                    +
                  </button>
                </td>
                <td>R.S </td>
                <th>
                  <button
                    className="btn btn-ghost text-red btn-xs"
                    onClick={() => console.log("cads")}
                  >
                    <FaTrash />
                  </button>
                </th>
              </tr>
            
          </tbody>
        </table>
      </div>
      {/*end table for the cart */}
      
    </div>
  )
}

export default CartPage