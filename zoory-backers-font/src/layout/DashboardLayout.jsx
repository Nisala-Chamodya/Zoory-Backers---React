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
import useAdmin from "../hooks/useAdmin";

import logo from "/logo.png";
import useAuth from "../hooks/useAuth";
import Modal from "../component/Modal";

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
      <Link to="/order-tracking">
        <FaLocationArrow />
        Order Tracking
      </Link>
    </li>
    <li>
      <Link to="/customer-support">
        <FaRegQuestionCircle />
        Customer Support
      </Link>
    </li>
  </>
);

const DashboardLayout = () => {
  const isAdmin = true;
  {
    /*  const { loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    console.log(loading, isAdmin);
    return <p>Loading...</p>;
  } meek check karanna*/
  }

  return (
    <div>
      {isAdmin ? (
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
              {/*  <li>
                <Link to="/dashboard/manage-booking">
                  <FaShoppingBag />
                  Manage Booking
                </Link>
              </li>*/}
              <li>
                <Link to="/dashboard/add-menu">
                  <FaPlusCircle />
                  Add Menu
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manage-items">
                  <FaEdit />
                  Manage Items
                </Link>
              </li>
              <li>
                <Link to="/dashboard/users">
                  <FaUsers />
                  All Users
                </Link>
              </li>
              <hr />
              {/* Shared nav links */}
              <div className="mt-9">{sharedLinks}</div>
            </ul>
          </div>
        </div>
      ) : (
        <Modal />
      )}
    </div>
  );
};

export default DashboardLayout;
