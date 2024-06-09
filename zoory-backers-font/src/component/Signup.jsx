import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";

const Signup = () => {
  {
    /*start react form hook */
  }
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const { createUser, login } = useContext(AuthContext);
  //redirecting  to the home page or specific page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        alert("Account Creation Successfull");
        document.getElementById("my_modal_5").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const userCode = error.code;
        const errorMessage = error.message;
      });
  };

  {
    /*end react form hook */
  }

  return (
    <div className="flex items-center justify-center w-full max-w-md mx-auto my-20 bg-white shadow">
      {/*start sign up form*/}
      <div className="flex flex-col justify-center mt-0 modal-action">
        {/*start Form Section*/}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body "
          method="dialog"
        >
          <h3 className="text-lg font-bold">Create a Account</h3>

          {/*start emai*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register("email")}
            />
          </div>
          {/*end email*/}

          {/*start password*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password")}
            />
            <label className="mt-1 label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          {/*end password*/}

          {/*start error text*/}

          {/*end error text*/}
          {/*start login button*/}
          <div className="mt-6 form-control">
            <input
              type="submit"
              value="Signup"
              className="btn bg-[#FF9800] text-white"
            />
          </div>
          {/*end login button*/}

          <p className="my-2 text-center">
            {" "}
            Have an account{" "}
            <button
              className="ml-1 underline text-red"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Login
            </button>
            {""}
          </p>

          <Link
            to="/"
            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
          >
            ✕
          </Link>
        </form>
        {/*end Form Section*/}

        {/*start log with social media*/}
        <div className="mb-5 space-x-5 text-center">
          <button className="btn btn-circle hover:bg-orange">
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-orange">
            <FaFacebook />
          </button>
          <button className="btn btn-circle hover:bg-orange">
            <FaGithub />
          </button>
        </div>
        {/*end log with social media*/}
      </div>
      {/*end sign up form*/}
      <Modal />
    </div>
  );
};

export default Signup;
