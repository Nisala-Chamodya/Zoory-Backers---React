import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import axios from "axios";

const Modal = () => {
  // Start react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signUpWithGmail, login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    try {
      const result = await login(data.email, data.password);
      const user = result.user;
      const userInfor = { name: user.displayName, email: user.email };
      await axios.post("http://localhost:6001/users", userInfor);
      alert("Login Successful");
      document.getElementById("my_modal_5").close();
      navigate(from, { replace: true });
    } catch (error) {
      setErrorMessage("Provide a correct email and password");
    }
  };

  // Google SignIn
  const handleLogin = async () => {
    try {
      const result = await signUpWithGmail();
      const user = result.user;
      const userInfor = { name: user.displayName, email: user.email };
      await axios.post("http://localhost:6001/users", userInfor);
      alert("Account Creation Successful");
      document.getElementById("my_modal_5").close();
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        <div className="flex flex-col justify-center mt-0 modal-action">
          {/* Start form section */}
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-lg font-bold">Please Login!</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-xs italic text-red">Email is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-xs italic text-red">Password is required</p>
              )}
              <label className="mt-1 label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/* Error message */}
            {errorMessage && (
              <p className="text-xs italic text-red">{errorMessage}</p>
            )}
            {/* Login button */}
            <div className="mt-6 form-control">
              <input
                type="submit"
                value="Login"
                className="btn bg-[#FF9800] text-white"
              />
            </div>
            {/* Signup link */}
            <p className="my-2 text-center">
              Do not have an account?{" "}
              <Link to="/signup" className="ml-1 underline text-red">
                Sign up now
              </Link>
            </p>
            {/* Close button */}
            <button
              type="button"
              onClick={() => document.getElementById("my_modal_5").close()}
              className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
            >
              ✕
            </button>
          </form>
          {/* End form section */}
          {/* Log in with social media */}
          <div className="mb-5 space-x-5 text-center">
            <button
              className="btn btn-circle hover:bg-orange"
              onClick={handleLogin}
            >
              <FaGoogle />
            </button>
            <button className="btn btn-circle hover:bg-orange">
              <FaFacebookF />
            </button>
            <button className="btn btn-circle hover:bg-orange">
              <FaGithub />
            </button>
          </div>
          {/* End log in with social media */}
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
