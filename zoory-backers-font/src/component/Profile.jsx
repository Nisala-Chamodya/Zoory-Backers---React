import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";

const Profile = ({ user }) => {
  const { logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        alert("logout");
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  };
  return (
    <div>
      <div className="z-50 drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user.photoURL ? (
                <img alt="User profile" src={user.photoURL} />
              ) : (
                <img
                  alt="Default profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              )}
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="min-h-full p-4 menu w-80 bg-base-200 text-base-content">
            <li>
              <a href="/update-profile">Profile</a>
            </li>
            <li>
              <a>Order</a>
            </li>
            <li>
              <a>Setting</a>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
