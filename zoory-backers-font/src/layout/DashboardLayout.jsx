import React from "react";
import {
  FaEdit,
  FaLocationArrow,
  FaPlusCircle,
  FaRegQuestionCircle,
  FaShoppingBag,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdDashboard, MdDashboardCustomize } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

import logo from "/logo.png";

const sharedLinks = (
  <>
    <li className="mt-3">
      <Link to="/">
        <MdDashboard />
        Home
      </Link>
    </li>
    <li>
      <Link to="/menu">
        <FaCartShopping />
        Menu
      </Link>
    </li>

    <li>
      <Link to="/menu">
        <FaLocationArrow />
        Order Tracking
      </Link>
    </li>
    <li>
      <Link to="/menu">
        <FaRegQuestionCircle />
        Customer Support
      </Link>
    </li>
  </>
);

const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col my-2 sm:justify-start sm:items-start drawer-content">
          {/* Page content here */}
          <div className="flex items-center justify-between mx-4">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              <MdDashboardCustomize />
            </label>
            <button className="flex items-center gap-2 px-6 text-white rounded-full btn bg-orange sm:hidden">
              <FaUser />
              Logout
            </button>
          </div>
          <div className="mx-4 mt-5 md:mt-2">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="min-h-full p-4 menu w-80 bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard" className="flex justify-start mb-3">
                <img src={logo} alt="logo.png" className="w-20" />
                <span className="badge badge-primary">Admin</span>
              </Link>
            </li>
            <hr />
            <li className="mt-9">
              <Link to="/dashboard">
                <MdDashboard />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <FaShoppingBag />
                Manage Booking
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <FaPlusCircle />
                Add Menu
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                {" "}
                <FaEdit />
                Manage Items
              </Link>
            </li>
            <li>
              <Link to="/dashboard/users">
                <FaUsers />
                All Users{" "}
              </Link>
            </li>

            <hr />

            {/*start shared nav links */}
            <div className="mt-9"> {sharedLinks}</div>

            {/*start shared nav Links */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
