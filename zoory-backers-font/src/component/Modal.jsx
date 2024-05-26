import React from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Modal = () => {
  {
    /*start react form hook */
  }
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  {
    /*end react form hook */
  }
  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        <div className="flex flex-col justify-center mt-0 modal-action">
          {/*start form section  */}
          <form
            className="card-body"
            method="dialog"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="text-lg font-bold">Please Login!</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                {...register("password")}
              />
              <label className="mt-1 label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/*start error txt */}

            {/*end error txt */}

            {/*start login button*/}
            <div className="mt-6 form-control">
              <input
                type="submit"
                value="Login"
                className="btn bg-[#FF9800] text-white"
              />
            </div>
            {/*end login button*/}
            {/*start signup txt */}
            <p className="my-2 text-center">
              Do not have an account ?{" "}
              <Link to="/signup" className="ml-1 underline text-red">
                signup now
              </Link>
              {""}
            </p>
            {/*end sign up txt */}
            {/*start close btn */}
            <button
              htmlFor="my_modal_5"
              onClick={() => document.getElementById("my_modal_5").close()}
              className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
            >
              ✕
            </button>
            {/*end close btn*/}
          </form>
          {/*end Form section */}

          {/*start log with social media*/}
          <div className="mb-5 space-x-5 text-center">
            <button className="btn btn-circle hover:bg-orange">
              <FaGoogle />
            </button>
            <button className="btn btn-circle hover:bg-orange">
              <FaFacebookF />
            </button>
            <button className="btn btn-circle hover:bg-orange">
              <FaGithub />
            </button>
          </div>
          {/*end log with social media*/}
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
