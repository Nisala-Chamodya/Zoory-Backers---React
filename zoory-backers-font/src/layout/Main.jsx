import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import "../App.css";
import Footer from "../component/Footer";
import { AuthContext } from "../contexts/AuthProvider";
import LoadingSpinner from "../component/LoadingSpinner";

const Main = () => {
  const {loading}=useContext(AuthContext);
  return (
   <div>
    {
      loading ? <LoadingSpinner/> : <div> <Navbar/> <div className="min-h-screen"><Outlet/></div> <Footer/> </div>
    }
   </div>
  );
};

export default Main;
{/* start */}
   <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
{/*end */}