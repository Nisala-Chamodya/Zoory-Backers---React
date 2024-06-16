import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";
import axios from "axios";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile, signUpWithGmail } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;

    try {
      const result = await createUser(email, password);
      const user = result.user;
      await updateUserProfile(data.name, data.photoURL);

      const userInfor = {
        name: data.name,
        email: data.email,
      };

      await axios.post("http://localhost:6001/users", userInfor);
      alert("Account Creation Successful");
      document.getElementById("my_modal_5").close();
      navigate(from, { replace: true });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert(
          "This email is already in use. Please use a different email or log in."
        );
      } else {
        console.error("Error during account creation:", error);
        alert("Error creating account: " + error.message);
      }
    }
  };

  const handleRegister = async () => {
    try {
      const result = await signUpWithGmail();
      const user = result.user;
      const userInfor = {
        name: user.displayName,
        email: user.email,
      };

      await axios.post("http://localhost:6001/users", userInfor);
      alert("Account Creation Successful");
      document.getElementById("my_modal_5").close();
      navigate("/");
    } catch (error) {
      console.error("Error during Google sign up:", error);
      alert("Error signing up with Google: " + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full max-w-md mx-auto my-20 bg-white shadow">
      <div className="flex flex-col justify-center mt-0 modal-action">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body"
          method="dialog"
        >
          <h3 className="text-lg font-bold">Create an Account</h3>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <label className="mt-1 label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="mt-6 form-control">
            <input
              type="submit"
              value="Signup"
              className="btn bg-[#FF9800] text-white"
            />
          </div>

          <p className="my-2 text-center">
            Have an account{" "}
            <button
              className="ml-1 underline text-red"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Login
            </button>
          </p>

          <Link
            to="/"
            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
          >
            ✕
          </Link>
        </form>

        <div className="mb-5 space-x-5 text-center">
          <button
            className="btn btn-circle hover:bg-orange"
            onClick={handleRegister}
          >
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-orange">
            <FaFacebook />
          </button>
          <button className="btn btn-circle hover:bg-orange">
            <FaGithub />
          </button>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Signup;
