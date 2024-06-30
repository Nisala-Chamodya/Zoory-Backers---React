import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa6";

const UpdateMenu = () => {
  const item = useLoaderData();
  // console.log(item);

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();

  //image hosting key
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  //console.log(image_hosting_key);
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  //start handle on submit
  const onSubmit = async (data) => {
    // console.log(data);
    const imageFile = { image: data.image[0] };
    const hostingImg = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    // console.log(hostingImg.data);
    if (hostingImg.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: hostingImg.data.data.display_url,
      };
      // console.log(menuItem);
      const postMenuItem = axiosSecure.patch(`/menu/${item._id}`, menuItem);
      //console.log(postMenuItem);
      if (postMenuItem) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Item Is Addedd Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  //end handle on submit
  return (
    <div className="w-full md:w-[870px] px-4 mx-auto">
      <h2 className="my-4 text-2xl font-semibold">
        Update This <span className="text-orange">Menu Item</span>
      </h2>
      {/* start form here  */}
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*first */}
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Resipe Name*</span>
            </label>
            <input
              type="text"
              defaultValue={item.name}
              {...register("name", { required: true })}
              placeholder="Resipe Name"
              className="w-full text-gray-500 input input-bordered"
            />
          </div>
          {/*second */}
          <div className="flex items-center gap-4 ">
            {/*categories */}
            <div className="w-full my-6 form-control">
              <label className="label">
                <span className="label-text"> Category*</span>
              </label>
              <select
                {...register("category", { required: true })}
                className="text-gray-500 select select-bordered"
                defaultValue={item.category}
              >
                <option disabled value="default">
                  Select a Category
                </option>
                <option value="bun">Buns</option>
                <option value="rice">Rice</option>
                <option value="kotthu">Kotthu</option>
                <option value="pizza">Pizza</option>
                <option value="deserts">Desert</option>
                <option value="popular">Popular</option>
              </select>
            </div>

            {/*prices*/}
            <div className="w-full form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                defaultValue={item.price}
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="w-full text-gray-500 input input-bordered"
              />
            </div>
          </div>

          {/*third*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              defaultValue={item.recipe}
              {...register("recipe", { required: true })}
              className="h-24 text-gray-500 textarea textarea-bordered"
              placeholder="Tell the Words About Your Recipe"
            ></textarea>
          </div>
          {/*4th  row*/}
          <div className="flex items-center gap-4 ">
            <div className="w-full my-6 form-control">
              <input
                {...register("image", { required: true })}
                type="file"
                className="w-full max-w-xs file-input "
              />
            </div>

            <button className="px-6 text-white btn bg-orange">
              Update Items
              <FaUtensils />
            </button>
          </div>
        </form>
      </div>
      {/*end form here*/}
    </div>
  );
};

export default UpdateMenu;
