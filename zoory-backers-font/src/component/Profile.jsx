import React from "react";

const Profile = ({ user }) => {
  return (
    <div >
      {/*start desi ui component*/}
      <div className="z-50 drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost btn-circle avatar">{/*start desiui img */}
    <div className="w-10 rounded-full">
       {
        user.photoURL ?    <img alt="Tailwind CSS Navbar component" src={user.photoURL} /> :   <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
       }
        </div>
    {/*end desi ui image */}
    </label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="min-h-full p-4 menu w-80 bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Profile</a></li>
      <li><a>Order</a></li>
       <li><a>Setting</a></li>
         <li><a>Logout</a></li>
    </ul>
  </div>
</div>
      {/*end desi ui component */}
    </div>
  );
};

export default Profile;
