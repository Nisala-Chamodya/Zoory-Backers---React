import React, { useEffect, useState } from "react";
import logo from "../../public/logo.png";
import { FaUser } from "react-icons/fa";
import Modal from "./Modal";
const Navbar = () => {
  {
    /*start scroll beheviour */
  }

  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offSet = window.scrollY;
      if (offSet > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //end handle scroll

  {
    /*end scroll beheviour */
  }
  const NavItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li>
              <a href="/menu">All</a>
            </li>
            <li>
              <a>Buns</a>
            </li>
            <li>
              <a>Cake</a>
            </li>
          </ul>
        </details>
      </li>

      <li tabIndex={0}>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li>
              <a>Online Order</a>
            </li>
            <li>
              <a>Table Booking</a>
            </li>
            <li>
              <a>Order Tacking</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Offers</a>
      </li>
    </>
  );

  return (
    <header className="container fixed top-0 left-0 right-0 mx-auto transition-all duration-300 ease-in-out max-w-screen-2xl">
      <div
        className={`navbar xl:px-24 ${
          isSticky
            ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavItems}
            </ul>
          </div>
          <a href="/">
            <img src={logo} alt="logo.png" className="w-auto h-[80px]" />{" "}
          </a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{NavItems}</ul>
        </div>
        <div className="navbar-end">
          {/*start search btn */}
          <button className="hidden btn btn-ghost btn-circle lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          {/*end search btn */}
          {/*start cart */}
          <div
            tabIndex={0}
            role="button"
            className="items-center justify-center hidden mr-3 lg:flex btn btn-ghost btn-circle"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          {/*end cart */}

          {/* Login Button */}
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="flex items-center gap-2 px-5 mr-32 rounded-full btn bg-[#FF9800] text-slate-100"
          >
            <FaUser className="bg-[#FF9800]" />
            Login
          </button>
          {/*start login model  */}
          <Modal />
          {/*end login model */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
